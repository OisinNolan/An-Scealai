import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardComponent } from '../../student/dashboard/dashboard.component';
import { RecordingComponent } from '../../student/recording/recording.component';
import { MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { BasicDialogComponent } from '../../dialogs/basic-dialog/basic-dialog.component';
import { TranslationService } from 'app/core/services/translation.service';

@Injectable({
  providedIn: 'root'
})
class CanDeactivateDashboardGuard implements CanDeactivate<DashboardComponent> {
  canDeactivate(
    dashboard: DashboardComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if(dashboard.storySaved) { return true };
    //dashboard.showModal();
    //return dashboard.modalChoice;
  }
}

@Injectable({
  providedIn: 'root'
})
class CanDeactivateRecordingGuard implements CanDeactivate<RecordingComponent> {
  
  constructor(private dialog: MatDialog, private ts: TranslationService) { }
              
  canDeactivate(
    recording: RecordingComponent
  ): Observable<boolean> | boolean {
    if(recording.recordingSaved) { return true };
    
    let dialogRef: MatDialogRef<unknown>;
    
    dialogRef = this.dialog.open(BasicDialogComponent, {
      data: {
        title: this.ts.l.save_changes_made_to_this_recording,
        type: '',
        confirmText: this.ts.l.save,
        cancelText: this.ts.l.cancel
      },
      width: '30vh',
    });
    
    dialogRef.afterClosed().subscribe( (res) => {
        dialogRef = undefined;
        if(res) {
          recording.saveRecordings();
          return true;
        }
    });
    return false;
  }
}

export {CanDeactivateDashboardGuard, CanDeactivateRecordingGuard};