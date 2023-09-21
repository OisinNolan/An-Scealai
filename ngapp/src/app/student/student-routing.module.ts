import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'app/core/services/auth-guard.service';
import { CanDeactivateDashboardGuard, CanDeactivateRecordingGuard } from 'app/core/guards/can-deactivate.guard';
import { StopSoundGuard } from 'app/core/guards/stop-sound.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SynthesisComponent } from './synthesis/synthesis.component';
import { RecordingComponent } from './recording/recording.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home', canActivate: [AuthGuardService] },
  { path: 'home', pathMatch: 'full', component: HomePageComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService], canDeactivate: [CanDeactivateDashboardGuard, StopSoundGuard] },
  { path: 'synthesis/:id', component: SynthesisComponent, canActivate: [AuthGuardService]},
  { path: 'record-story/:id', component: RecordingComponent, canActivate: [AuthGuardService], canDeactivate: [CanDeactivateRecordingGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
