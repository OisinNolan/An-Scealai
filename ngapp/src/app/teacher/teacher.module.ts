import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherStudentComponent } from './teacher-student/teacher-student.component';
import { TeacherClassroomComponent } from './teacher-classroom/teacher-classroom.component';
import { TeacherStoryComponent } from './teacher-story/teacher-story.component';
import { TeacherSettingsComponent } from './teacher-settings/teacher-settings.component';
import { TeacherDictoglossComponent } from './teacher-dictogloss/teacher-dictogloss.component';

import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { ClassroomDrawerComponent } from './classroom-drawer/classroom-drawer.component';
//import { FilterPipe } from 'app/core/pipes/filter.pipe';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherFeedbackComponent } from './teacher-feedback/teacher-feedback.component';
import { FeedbackCommentComponent } from './feedback-comment/feedback-comment.component';

@NgModule({
  declarations: [
    //FilterPipe,
    TeacherDashboardComponent,
    TeacherStudentComponent,
    TeacherClassroomComponent,
    TeacherStoryComponent,
    TeacherSettingsComponent,
    TeacherDictoglossComponent,
    ClassroomDrawerComponent,
    StudentListComponent,
    TeacherFeedbackComponent,
    FeedbackCommentComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatExpansionModule,
    MatDividerModule,
    ReactiveFormsModule,
    QuillModule.forRoot({
      customOptions: [{
              import: 'formats/font',
              whitelist: [
                  'sans-serif',
                  'serif',
                  'monospace',
                  'arial',
                  'times-new-roman', // @quill-font
              ]
          }],
  }),
  ]
})
export class TeacherModule { }
