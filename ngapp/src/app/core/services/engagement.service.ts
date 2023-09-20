import { Injectable } from '@angular/core';
import { Event, EventType, MouseOverGrammarSuggestionEvent } from 'app/core/models/event';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { SynthItem } from 'app/core/models/synth-item';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { HighlightTag } from 'lib/quill-highlight/quill-highlight';
import config from 'abairconfig';

@Injectable({
  providedIn: 'root'
})
export class EngagementService {

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  baseUrl: string = config.baseurl + 'engagement/';

  playSynthesis(si: SynthItem, storyId: string) {
    const info = {
      date: Date(),
      voice: si.voice,
      text: si.text,
      user: this.auth.getUserDetails(),
      storyId: storyId,
    };
    this.http.post(this.baseUrl + 'addEvent/playSynthesis', info).subscribe();
  };

  addEventForLoggedInUser(type: EventType, storyData?: object, dictionaryLookup?: string){
    this.addEventObservable(type, storyData, dictionaryLookup).subscribe();
  }

  addEventObservable(type: EventType, storyData: object | undefined, dictionaryLookup: string | undefined): Observable<any> {
    const user = this.auth.getUserDetails();

    if (!this.auth.isLoggedIn() || !user) {
      throw new Error('Cannot add event if user is not logged in');
    }

    const event: Event = new Event();
    event.type = type;
    if (storyData) { event.storyData = storyData; }
    if (dictionaryLookup) { event.dictionaryLookup = dictionaryLookup; }
    event.userId = user._id;

    return this.http
        .post(this.baseUrl + 'addEventForUser/' +
              event.userId,
              { event });
  }
  
  addAnalysisEvent(type: EventType, stats: Object){
    const user = this.auth.getUserDetails();
    if (!user || !this.auth.isLoggedIn()) return;
    let event: Event = new Event();
    event.type = type;
    event.statsData = stats;
    event.userId = user._id;
    console.log("event to record: ", event);
    return this.http.post(this.baseUrl + "addAnalysisEvent/", {event:event}).subscribe();
  }
  
  getPreviousAnalysisData(type: string): Observable<any> {
    return this.http.get(this.baseUrl + "getPreviousAnalysisData/" + type); 
  }

  getEventsForUser(id: string): Observable<any> {
    return this.http.get(this.baseUrl + 'eventsForUser/' + id);
  }

  mouseOverGrammarSuggestionEvent(tags: HighlightTag[]) {
    const user = this.auth.getUserDetails();
    if (! this.auth.isLoggedIn() || !user) {
      throw new Error('Cannot add event if user is not logged in');
    }
    const event: MouseOverGrammarSuggestionEvent =
      new MouseOverGrammarSuggestionEvent();
    event.type = EventType['MOUSE-OVER-GRAMMAR-SUGGESTION'];
    event.grammarSuggestionData = tags;
    // for (const key of Object.getOwnPropertyNames(tag)) {
    //   if ( key !== 'tooltip'){
    //     event.grammarSuggestionData[key] = tags;
    //   }
    // }
    event.userId = user._id;
    this.http
        .post(
            this.baseUrl + 'addEventForUser/' + event.userId,
            { event: event.fromJSON(event) })
        .subscribe();

  }

  getEventsForStory(id: string): Observable<any> {
    return this.http.get(this.baseUrl + 'eventsForStory/' + id);
  }
  
  getDictionaryLookups(id: string, startDate: string, endDate: string): Observable<any> {
    return this.http.post(this.baseUrl + 'dictionaryLookups/' + id, {startDate: startDate, endDate: endDate});
  }
}
