import { Component, Inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { TranslationService } from 'app/core/services/translation.service';
import { AuthenticationService } from 'app/core/services/authentication.service';

export interface DialogData {
  title: string;
  message: string;
  data: any;
  type: string;
  confirmText: string;
  cancelText: string;
}

@Component({
  selector: 'app-basic-dialog',
  templateUrl: './basic-dialog.component.html',
  styleUrls: ['./basic-dialog.component.scss']
})
export class BasicDialogComponent {
  public textInputs: string[] = [];
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  copyIconClicked: boolean = false;
  
  constructor(@Inject(MAT_DIALOG_DATA) 
              public data: DialogData,
              public ts: TranslationService,
              public auth: AuthenticationService) {}
}

