import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ClassroomService } from '../classroom.service';
import { FormControl } from '@angular/forms';
import { Classroom } from '../classroom';
import { EngagementService } from '../engagement.service';
import { EventType } from '../event';
import { TranslationService } from '../translation.service';
import { NotificationService } from '../notification-service.service';
import { StatsService } from '../stats.service';
import { StudentStats } from '../studentStats';
import { StoryService } from '../story.service';
import { Story } from '../story';
import { ProfileService } from '../profile.service';
import { MessageService } from '../message.service';
import { UserService } from '../user.service';
import { RecordingService } from '../recording.service';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  classroomCodeOutput: string;
  codeInput : FormControl;
  foundClassroom: Classroom;
  classroom: Classroom;
  statObj: StudentStats = new StudentStats();
  updatedUsername: string;
  errorMessage = '';
  newPassword: string;
  newPasswordConfirm: string;

  constructor(public auth: AuthenticationService,
              private classroomService: ClassroomService,
              private engagement: EngagementService,
              public ts: TranslationService,
              public ns: NotificationService,
              public storyService: StoryService,
              public profileService: ProfileService,
              public messageService: MessageService,
              public userService: UserService,
              public statsService: StatsService,
              public recordingService: RecordingService,
              public dialogService: DialogService) { }

  ngOnInit() {
    this.codeInput = new FormControl();
    this.getClassroom();
    this.codeInput.valueChanges.subscribe(
      (code) => {
        if (code.length > 0) {
          this.classroomService.getClassroomFromCode(code).subscribe(
            (res) => {
              if (res.found) {
                this.classroomCodeOutput = null;
                this.foundClassroom = res.classroom;
              } else {
                this.foundClassroom = null;
                this.classroomCodeOutput = res.message;
              }
            });
        } else {
          this.classroomCodeOutput = null;
        }
      });
  }

/*
* Join a classroom with a given classroom code
* Create a new stats object in the database
*/
  joinClassroom() {
    this.classroomService.addStudentToClassroom(this.foundClassroom._id, this.auth.getUserDetails()._id).subscribe((res) => {
      if (res.status === 200) {
        this.classroom = this.foundClassroom;
        this.foundClassroom = null;
        this.statObj.studentId = this.auth.getUserDetails()._id;
        this.statObj.studentUsername = this.auth.getUserDetails().username;
        this.statObj.classroomId = this.classroom._id;
        this.statsService.addNewStatEntry(this.statObj).subscribe();
      }
    });
  }

  getClassroom() {
    this.classroomService.getAllClassrooms().subscribe((res : Classroom[]) => {
      for(let classroom of res) {
        if(classroom.studentIds.includes(this.auth.getUserDetails()._id)) {
          this.classroom = classroom;
        }
      }
    });
  }

  leaveClassroom() {
    this.classroomService.removeStudentFromClassroom(this.classroom._id, this.auth.getUserDetails()._id).subscribe((res) => {
      this.classroom = null;
    });
    this.statsService.deleteStats(this.auth.getUserDetails()._id).subscribe(
      (res) => {
      });
  }

  logout() {
    this.engagement.addEventForLoggedInUser(EventType.LOGOUT);
    this.auth.logout();
  }

  /*
   * Delete user account and all data associated with the user
   */
  deleteAccount() {
    const userDetails = this.auth.getUserDetails();
    if (!userDetails) {
      return;
    }

    if (userDetails.role === "STUDENT") {
      if (this.classroom) {
        this.leaveClassroom();
      }

      this.storyService.getStoriesFor(userDetails.username).subscribe( (res: Story[]) => {
        for(let story of res) {
          this.recordingService.deleteStoryRecordingAudio(story._id).subscribe((res) => {});
          this.recordingService.deleteStoryRecording(story._id).subscribe( (res) => {
          })
        }
      });
      
      this.storyService.deleteAllStories(userDetails.username).subscribe( (res) => {
      });
      
      this.statsService.deleteStats(userDetails._id).subscribe( (res) => {
      });
    }
    
    if(userDetails.role === "TEACHER") {
      this.classroomService.getClassroomsForTeacher(userDetails._id).subscribe( (res) => {
        for(let classroom of res) {
          this.statsService.deleteStatsForClassroom(classroom._id).subscribe( (res) => {});
        }
      });
      
      this.classroomService.deleteClassroomsForTeachers(userDetails._id).subscribe( (res) => {});
    }
    
    this.messageService.deleteAllMessages(userDetails._id).subscribe( (res) => {});  
    this.profileService.deleteProfile(userDetails._id).subscribe( (res) => {});
    this.userService.deleteUser(userDetails.username).subscribe( (res) => {});
    this.auth.logout();
  }
  
  /*
  * Update account username and all data associated with it
  */
  async updateUsername() {
    console.log(this.updatedUsername)
    if (!this.updatedUsername){
      this.errorMessage = this.ts.l.please_input_a_new_username;
      return
    }
    
    if (!this.updatedUsername.match('^[A-Za-z0-9]+$')) {
      this.errorMessage = this.ts.l.username_no_special_chars;
      return;
    }
    
    const studentsWithThisUsername = await this.userService.getUserByUsername(this.updatedUsername).toPromise();
    
    if (studentsWithThisUsername.length > 0) {
      this.errorMessage = this.ts.l.username_in_use;
      this.updatedUsername = "";
      return
    }
    
    if(this.auth.getUserDetails().role === "STUDENT") {
      await this.storyService.updateAuthor(this.auth.getUserDetails().username, this.updatedUsername).toPromise();
      const stats = await this.statsService.getStatsForStudent(this.auth.getUserDetails()._id).toPromise()
        .catch(err => {
          console.error(
            `${this.auth.getUserDetails().username} \
              doesn't have any associated studentStats!`, err);
        });
      if (stats) {
        await this.statsService.updateStudentUsername(this.auth.getUserDetails()._id, this.updatedUsername).toPromise();
      }
    }
    
    await this.messageService.updateSenderUsername(this.auth.getUserDetails()._id, this.updatedUsername).toPromise();
    await this.userService.updateUsername(this.updatedUsername).toPromise()
    this.auth.logout();
  }

  updatePassword() {
    if (this.newPassword && this.newPasswordConfirm) {
      if (this.newPassword === this.newPasswordConfirm) {
        if (this.newPassword.length < 5) {
          this.errorMessage = this.ts.l.passwords_5_char_long;
        } else {
          this.errorMessage = '';
          this.userService.updatePassword(this.auth.getUserDetails()._id, this.newPassword).subscribe((res) => {
          });
          this.auth.logout();
        }
      } else {
        this.errorMessage = this.ts.l.passwords_must_match;
      }
    } else {
      this.errorMessage = this.ts.l.please_input_a_new_password_confirm;
    }
  }
  
  openDeleteDialog() {
    this.dialogService.openDialog({
      title: this.ts.l.are_you_sure,
      message: this.auth.getUserDetails().role === 'STUDENT' ? this.ts.l.this_includes_story_data : this.ts.l.this_includes_personal_data,
      confirmText: this.ts.l.yes,
      cancelText: this.ts.l.no
    }).subscribe((res) => {
      console.log(res);
      if(res) {
        this.deleteAccount();
      }
    });
  }
  
  openUpdateUsernameDialog() {
    this.dialogService.openDialog({
      title: this.ts.l.change_username,
      message: this.ts.l.you_will_have_to_login,
      changeUsername: true,
      confirmText: this.ts.l.save,
      cancelText: this.ts.l.cancel
    }).subscribe((res) => {
      this.errorMessage = "";
      this.updatedUsername = res;
      this.updateUsername();
    });
  }
  
  openUpdatePasswordDialog() {
    this.dialogService.openDialog({
      title: this.ts.l.change_password,
      message: this.ts.l.you_will_have_to_login_password,
      changePassword: true,
      confirmText: this.ts.l.save,
      cancelText: this.ts.l.cancel
    }).subscribe((res) => {
      this.errorMessage = "";
      if(res) {
        this.newPassword = res[0];
        this.newPasswordConfirm = res[1];
        this.updatePassword();
      }
    });
  }
}
