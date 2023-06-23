import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { ClassroomService } from 'app/core/services/classroom.service';
import { UntypedFormControl } from '@angular/forms';
import { Classroom } from 'app/core/models/classroom';
import { EngagementService } from 'app/core/services/engagement.service';
import { EventType } from 'app/core/models/event';
import { TranslationService } from 'app/core/services/translation.service';
import { StoryService } from 'app/core/services/story.service';
import { Story } from 'app/core/models/story';
import { ProfileService } from 'app/core/services/profile.service';
import { MessageService } from 'app/core/services/message.service';
import { UserService } from 'app/core/services/user.service';
import { RecordingService } from 'app/core/services/recording.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BasicDialogComponent } from 'app/dialogs/basic-dialog/basic-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  classroomCodeOutput: string;
  codeInput : UntypedFormControl;
  foundClassroom: Classroom;
  classroom: Classroom;
  updatedUsername: string;
  errorMessage = '';
  newPassword: string;
  newPasswordConfirm: string;
  dialogRef: MatDialogRef<unknown>;
  displayComponent: string;
  lastClickedMenuId: string = "";

  constructor(public auth: AuthenticationService,
              private classroomService: ClassroomService,
              private engagement: EngagementService,
              public ts: TranslationService,
              public storyService: StoryService,
              public profileService: ProfileService,
              public messageService: MessageService,
              public userService: UserService,
              public recordingService: RecordingService,
              private dialog: MatDialog) { }

  /**
   * Set the first button on the side menu as currently selected
   */         
  ngOnInit() {
    document.getElementById('1').classList.add("clickedMenu");
    this.lastClickedMenuId = '1';
  }

  setCurrentDisplay(componentToDisplay, id) {
    this.displayComponent = componentToDisplay;
    // set css for selecting an option in the side nav
    let menuElement = document.getElementById(id);

    if (menuElement) {
      // remove css highlighting for currently highlighted story
      if (this.lastClickedMenuId) {
        document.getElementById(this.lastClickedMenuId).classList.remove("clickedMenu");
      }
      this.lastClickedMenuId = id;
      // add css highlighting to the newly clicked story
      menuElement.classList.add("clickedMenu");
    }
  }

  logout() {
    this.engagement.addEventForLoggedInUser(EventType.LOGOUT);
    this.auth.logout();
  }
}
