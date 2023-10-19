import { Component, Input, ChangeDetectorRef } from "@angular/core";
import { TranslationService } from "app/core/services/translation.service";
import { EngagementService } from "app/core/services/engagement.service";
import { EventType } from "app/core/models/event";
import { AuthenticationService, RegistrationTokenPayload } from "app/core/services/authentication.service";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "waiting-for-email-verification",
  templateUrl: "./waiting-for-email-verification.html",
  styleUrls: ["./register.component.scss"],
  host: {
    class: "registerContainer",
  },
})
export class WaitingForEmailVerificationComponent {
  errorKeys: string[] = [];
  // user credentials passed after successful registration
  @Input() credentials?: RegistrationTokenPayload;

  constructor(
    public ts: TranslationService,
    private engagement: EngagementService,
    private auth: AuthenticationService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  /**
   * Logs in user with newly registered credentials
   * @param credentials token payload sent from form.component
   */
  login(credentials: RegistrationTokenPayload) {
    this.auth.login(credentials).subscribe(
      (_ok) => {
        console.log("LOGIN OK");
        this.engagement.addEventForLoggedInUser(EventType.REGISTER);
        this.ts.setLanguage(this.ts.l.iso_code);
        this.router.navigateByUrl("register-profile");
      },
      (err) => {
        console.error(err);
        console.log("LOGIN ERROR");
        console.log(err.error);
        this.errorKeys = err.error.messageKeys;
        this.cd.detectChanges();
      }
    );
  }
}
