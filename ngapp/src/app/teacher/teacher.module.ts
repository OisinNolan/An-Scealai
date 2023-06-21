import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';

import { TeacherDashboardOldComponent } from './teacher-dashboard-old/teacher-dashboard-old.component';
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
import { ClassroomDrawerComponent } from './classroom-drawer/classroom-drawer.component';
import { FilterPipe } from 'app/core/pipes/filter.pipe';

@NgModule({
  declarations: [
    TeacherDashboardOldComponent,
    TeacherDashboardComponent,
    TeacherStudentComponent,
    TeacherClassroomComponent,
    TeacherStoryComponent,
    TeacherSettingsComponent,
    TeacherDictoglossComponent,
    ClassroomDrawerComponent,
    FilterPipe
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
