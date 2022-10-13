import { Component, OnInit, TemplateRef } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { StoryService } from '../../story.service';
import { AuthenticationService } from '../../authentication.service';
import { ClassroomService } from '../../classroom.service';
import { UserService } from '../../user.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgramDistributionComponent } from 'app/story-stats/ngram-distribution/ngram-distribution/ngram-distribution.component';

@Component({
  selector: 'app-stats-dashboard',
  templateUrl: './stats-dashboard.component.html',
  styleUrls: ['./stats-dashboard.component.scss']
})
export class StatsDashboardComponent implements OnInit {

  constructor(
    private storyService: StoryService,
    private auth: AuthenticationService,
    private classroomService: ClassroomService,
    private userService: UserService,
    private dialog: MatDialog,
  ) { }

  classrooms:any;
  stats:any[] = [];
  dataLoaded:boolean = false;
  grammarErrorCounts: any;

  async ngOnInit() {
    this.classrooms = await firstValueFrom(this.classroomService.getClassroomsForTeacher(this.auth.getUserDetails()._id));
    await this.getWordCounts();

    //await this.countGrammarErrorsStudent(this.classrooms[0].studentIds[0]);     // get pie chart for student
    await this.countGrammarErrorsClassroom(this.classrooms[0]);               // get pie chart for class
        
    this.dataLoaded = true;
  }

  dialogRef: MatDialogRef<unknown>;

  sampleTexts = [
    'Hello there. The cat sat on the mat.',
    'The dog sat on the frog.',
    'The frog sat on the dog'
  ];

  openModal(templateRef: TemplateRef<unknown>) {
    this.dialogRef = this.dialog.open(templateRef, {
         width: '60%',
    });

    this.dialogRef.afterClosed().subscribe(_ => {
        this.dialogRef = undefined;
    });

  }
  
  /*
  * For each classroom of logged-in teacher, get average word count for each student (over all stories)
  */
  private async getWordCounts() {
    
    for (let entry in this.classrooms) {
      // only consider classrooms that have at least one student
      if (this.classrooms[entry].studentIds.length > 0) {
        // stats object created for each classroom
        let statsEntry = {
          classroomTitle: this.classrooms[entry].title,
          studentNames: [],
          averageWordCounts: [],
          chartId: "chartId_" + entry
        }
        
        // get student usernames and word count averages
        for (let key in this.classrooms[entry].studentIds) {
          const userId = this.classrooms[entry].studentIds[key];
          const usernameResponse = await firstValueFrom(this.userService.getUserById(userId));
          statsEntry.studentNames.push(usernameResponse.username);

          const wordCountResponse = await firstValueFrom(this.storyService.averageWordCount(userId));
          statsEntry.averageWordCounts.push(wordCountResponse.avgWordCount);
        } 
          this.stats.push(statsEntry);
      }
    }
  }
  
  /*
  * Get grammar error counts for a given student ID
  */
  private async countGrammarErrorsStudent(id:string) {
    // for now just get stats for the first student in the first classroom
    this.grammarErrorCounts = await firstValueFrom(this.storyService.countGrammarErrors(id));
  }
  
  /*
  * Get grammar error counts for a given classroom
  */
  private async countGrammarErrorsClassroom(classroom) {
    const classErrors = {};
    // get error count object for each student in class and add to class error dict
    for (const id of classroom.studentIds) {
      const errorDict = await firstValueFrom(this.storyService.countGrammarErrors(id));
      for (const [errorName, errorCount] of Object.entries(errorDict)) {
          if (!classErrors[errorName]) {
              classErrors[errorName] = 0;
          }
          classErrors[errorName] += errorCount;
      }
    }
    
    this.grammarErrorCounts = classErrors;
  }

}
