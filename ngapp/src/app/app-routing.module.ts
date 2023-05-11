import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'app/core/interceptors/auth.interceptor';

import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { AboutLaraComponent } from './about-lara/about-lara.component';
import { TechnologyComponent } from './technology/technology.component';
import { ResourcesComponent } from './resources/resources.component';
import { TeamComponent } from './team/team.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { UserGuidesComponent } from './user-guides/user-guides.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from 'register/register.component';
import { RegisterProfileComponent } from './register-profile/register-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { AboutTaidhginComponent } from './about-taidhgin/about-taidhgin.component';
import { PromptsComponent } from './prompts/prompts.component';
import { DictoglossComponent } from './dictogloss/dictogloss.component';

import { DashboardComponent } from './student/dashboard/dashboard.component';
import { BookContentsComponent } from './student/book-contents/book-contents.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { RecordingComponent } from './student/recording/recording.component';
import { SynthesisComponent } from './student/synthesis/synthesis.component';

import { AuthGuardService } from 'app/core/services/auth-guard.service';
import { RoleGuardService } from 'app/core/services/role-guard.service';
import { NotificationService } from 'app/core/services/notification-service.service';
import { CanDeactivateDashboardGuard, CanDeactivateRecordingGuard } from 'app/core/guards/can-deactivate.guard';
import { StopSoundGuard } from 'app/core/guards/stop-sound.guard';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'about', component: AboutComponent},
  { path: 'about-lara', component: AboutLaraComponent },
  { path: 'technology', component: TechnologyComponent},
  { path: 'resources', component: ResourcesComponent},
  { path: 'team', component: TeamComponent},
  { path: 'sponsors', component: SponsorsComponent},
  { path: 'user-guides', component: UserGuidesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register/:role', component: RegisterComponent},
  { path: 'register-profile', component: RegisterProfileComponent, canActivate: [AuthGuardService]},
  // { path: 'dashboard/:id', component: DashboardComponent, canActivate: [AuthGuardService], canDeactivate: [CanDeactivateDashboardGuard] },
  { path: 'taidhgin', component: ChatbotComponent },
  { path: 'create-quiz', component: CreateQuizComponent, canActivate: [AuthGuardService] },
  { path: 'about-taidhgin', component: AboutTaidhginComponent },
  { path: 'prompts/:type', component: PromptsComponent},
  { path: 'dictogloss', component: DictoglossComponent, canActivate: [AuthGuardService], data :{ text:''} },
  // { path: 'synthesis/:id', component: SynthesisComponent, canActivate: [AuthGuardService], canDeactivate: [StopSoundGuard] },
  // { path: 'contents', component: BookContentsComponent, canActivate: [AuthGuardService] },
  { path: 'record-story/:id', component: RecordingComponent, canActivate: [AuthGuardService], canDeactivate: [CanDeactivateRecordingGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
  { path: 'messages/:id', component: MessagesComponent, canActivate: [AuthGuardService]},
  {
    path: 'stats-dashboard/:id',
    loadChildren: () => import('./stats-dashboard/stats-dashboard.module').then(m=>m.StatsDashboardModule)
  },
  {
    path: 'report-an-issue',
    loadChildren: () => import('report-an-issue/report-an-issue.module').then(m=>m.ReportAnIssueModule)
  },
  {
    path: 'student',
    data: { expectedRole: 'STUDENT' },
    canActivate: [RoleGuardService],
    loadChildren: () => import('./student/student.module').then(m=>m.StudentModule)
  },
  {
    path: 'teacher',
    data: { expectedRole: 'TEACHER' },
    canActivate: [RoleGuardService],
    loadChildren: () => import('./teacher/teacher.module').then(m=>m.TeacherModule)
  },
  {
    path: 'admin',
    canActivate: [RoleGuardService],
    data: { expectedRole: 'ADMIN' },
    loadChildren: () => import('./admin/admin.module').then(m=>m.AdminModule)
  },
];

@NgModule({
  imports:    [ RouterModule.forRoot(routes) ],
  exports:    [ RouterModule ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    NotificationService ],
})
export class AppRoutingModule { }
