import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { TranslationService } from 'app/core/services/translation.service';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { MatCheckboxModule } from '@angular/material/checkbox';

export interface DialogData {
  title: string;
  message: string;
  body: string;
  data: any;
  type: string;
  confirmText: string;
  cancelText: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ClipboardModule, MatDialogModule, PdfViewerModule, MatCheckboxModule],
  selector: 'app-basic-dialog',
  templateUrl: './instructions-dialog.component.html',
  styleUrls: ['./instructions-dialog.component.scss']
})
export class InstructionsDialogComponent {
  public textInputs: string[] = [];
  //pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  copyIconClicked: boolean = false;
  
  constructor(@Inject(MAT_DIALOG_DATA) 
              public data: DialogData,
              public ts: TranslationService,
              public auth: AuthenticationService,
              ) {}
}
