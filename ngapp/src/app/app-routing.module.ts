import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'app/core/interceptors/auth.interceptor';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from 'app/register/register.component';
import { RegisterProfileComponent } from './profile/register-profile/register-profile.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
import { CreateQuizComponent } from './chatbot/create-quiz/create-quiz.component';
import { AboutTaidhginComponent } from './nav-bar/about-taidhgin/about-taidhgin.component';
import { PromptsComponent } from './prompts/prompts.component';
import { DictoglossComponent } from './dictogloss/dictogloss.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

import { AuthGuardService } from 'app/core/services/auth-guard.service';
import { RoleGuardService } from 'app/core/services/role-guard.service';
import { NotificationService } from 'app/core/services/notification-service.service';

import { StatsDashboardComponent } from './stats-dashboard/stats-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent},
  //{ path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)},
  { path: 'register/:role', component: RegisterComponent},
  { path: 'register-profile', component: RegisterProfileComponent, canActivate: [AuthGuardService]},
  //{ path: 'taidhgin', component: ChatbotComponent },
  //{ path: 'create-quiz', component: CreateQuizComponent, canActivate: [AuthGuardService] },
  //{ path: 'about-taidhgin', component: AboutTaidhginComponent },
  { path: 'prompts/:type', component: PromptsComponent},
  { path: 'dictogloss', loadComponent: () => import('./dictogloss/dictogloss.component').then(m => m.DictoglossComponent), canActivate: [AuthGuardService], data :{ text:''} },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
  { path: 'messages/:id', loadComponent: () => import('./messages/messages.component').then(m => m.MessagesComponent), canActivate: [AuthGuardService]},
  { path: 'stats-dashboard/:id', loadComponent: () => import('./stats-dashboard/stats-dashboard.component').then(m => m.StatsDashboardComponent)},
  //{ path: 'stats-dashboard/:id', component: StatsDashboardComponent,},
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
