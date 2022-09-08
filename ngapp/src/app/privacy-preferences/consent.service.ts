import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';
import type { Observable } from 'rxjs';
import { of, BehaviorSubject, Subject } from 'rxjs';
import config from "../../abairconfig";
import { GoogleAnalytics } from 'app/services/google-analytics';
import { EngagementService } from '../engagement.service';
import { MatDialog } from "@angular/material/dialog";
import { TryingToUseFeaturesThatRequireConsentComponent } from "./trying-to-use-features-that-require-consent.dialog.component"
import { PleaseSpecifyPrivacyPreferences } from "./please-specify-privacy-preferences.dialog.component";
import translation from "../translation";
import { PrivacyPreferencesComponent } from './privacy-preferences.component';
import { ConsentGroupComponent } from './consent-group/consent-group.component';
export interface ConsentData {
  disable: Function;
  enable: Function;
  allowUnder16: boolean;
  isEnabled: ()=>boolean;
}

export const consentKey = ["Google Analytics", "Engagement", "Cloud Storage", "Linguistics Research"] as const;
export type ConsentGroup = typeof consentKey[number];

@Injectable({
  providedIn: 'root',
})
export class ConsentService {
  private fakeHttpFunc() {
    this.dialog.open(TryingToUseFeaturesThatRequireConsentComponent);
    return of(undefined) as Observable<any>;
  }
  private fakeHttp = {
    post: () => this.fakeHttpFunc(),
    get:  () => this.fakeHttpFunc(),
  }
  public http: HttpClient | typeof this.fakeHttp;
  private privacyPreferences$ = new Subject<any>();

  public linguisticsResearchEnabled$ = (()=>{
    const subject = new BehaviorSubject<boolean>(false);
    this.privacyPreferences$.subscribe(({'Linguistics Research': {option}})=>
      this.linguisticsResearchEnabled$.next(option === "accept")
    );
    return subject;
  })();


  age = (()=>{
    const subject = new BehaviorSubject<"under16"|"over16">(undefined);
    this.auth.loggedInAs$subscribe(()=>{
      this.realHttp.get<"under16"|"over16">(config.baseurl + 'privacy-preferences/age')
      .subscribe((body)=>subject.next(body));
    });
    // disable data processing if under 16
    subject.subscribe(age_v=>{
      if(age_v === "over16") return;
      this.consentTypes.forEach(ct=>{
        if(!ct.allowUnder16) return ct.disable();
      });
    });
    return subject;
  })();

  constructor(
    private engagement: EngagementService,
    private auth: AuthenticationService,
    public realHttp: HttpClient,
    private dialog: MatDialog,
  ) {
    this.http = this.realHttp;
    this.dialog.open(ConsentGroupComponent,{});

    this.privacyPreferences$.subscribe();

    // synchronise preferences
    this.auth.loggedInAs$subscribe( async () => {
      this.realHttp.get(config.baseurl + 'privacy-preferences').subscribe(pp=>this.privacyPreferences$.next(pp));
        const privacyPreferences = await this.http.get(config.baseurl + 'privacy-preferences').toPromise();
        if(!privacyPreferences) return this.dialog.open(PleaseSpecifyPrivacyPreferences, {disableClose: true}); // disableClose so that only way to close is to click 'ok' and go to pp page
        this.linguisticsResearchEnabled$.next(privacyPreferences["Linguistics Research"]?.option === "accept");
        Object.entries(this.consentTypes).forEach(([t,o])=>{
          const pp = privacyPreferences[t];
          const enabled = pp.option === "accept" && pp.prose === JSON.stringify(o.prose);
          if(enabled)  o.enable();
          else o.disable();
        });
      });

    this.age.subscribe(a => {
      if (a !== "under16") return;
      Object.entries(this.consentTypes).forEach(([t,o]) => {
        if (!o.allowUnder16) {
          this.http.post(config.baseurl + 'privacy-preferences', { forGroup: t, option: "reject", prose: JSON.stringify(o.prose) }).subscribe();
        }
      })
    });

  }

  savePreference(forGroup: ConsentGroup, option: "accept"|"reject") {
    this.realHttp.post(config.baseurl + "privacy-preferences",{
      forGroup,
      option,
      prose: JSON.stringify(translation[forGroup]),
    }).subscribe();
  }

  syncDisable(forGroup: ConsentGroup) {
    this.savePreference(forGroup,"reject");
  }

  syncEnable(forGroup: ConsentGroup) {
    this.savePreference(forGroup,"accept");
  }

  consentTypes = new Map<ConsentGroup,ConsentData>([
    ['Google Analytics', {
      allowUnder16: false,
      enable:    () => { this.syncEnable("Google Analytics");  GoogleAnalytics.disable(false) },
      disable:   () => { this.syncDisable("Google Analytics"); GoogleAnalytics.disable(true)  },
      isEnabled: () =>   GoogleAnalytics.isEnabled(),
    }],
    ['Engagement', {
      allowUnder16: false,
      enable:    () => { this.syncEnable("Engagement");  this.engagement.enable()  },
      disable:   () => { this.syncDisable("Engagement"); this.engagement.disable() },
      isEnabled: () =>   this.engagement.http === this.engagement.realHttp,
    }],
    ['Cloud Storage', {
      allowUnder16: true,
      enable:     () => { this.syncEnable("Cloud Storage");  this.http = this.realHttp   },
      disable:    () => { this.syncDisable("Cloud Storage"); this.http = this.fakeHttp  },
      isEnabled:  () =>   this.http === this.realHttp,
    }],
    ['Linguistics Research', {
      allowUnder16: false,
      enable:     () => { this.syncEnable("Linguistics Research");  this.linguisticsResearchEnabled$.next(true);   },
      disable:    () => { this.syncDisable('Linguistics Research'); this.linguisticsResearchEnabled$.next(false); },
      isEnabled:  () =>   this.linguisticsResearchEnabled$.value,
    }],
  ] as const);
}