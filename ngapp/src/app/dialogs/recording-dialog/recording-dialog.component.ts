import { Component, Inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { TranslationService } from 'app/core/services/translation.service';
import { RecordAudioService } from '../../core/services/record-audio.service';
import { SafeUrl } from '@angular/platform-browser';

export interface DialogData {
  type: string;
  id: string;
  confirmButton: string;
}

@Component({
  selector: 'app-recording-dialog',
  templateUrl: './recording-dialog.component.html',
  styleUrls: ['./recording-dialog.component.scss']
})
export class RecordingDialogComponent{

  constructor(@Inject(MAT_DIALOG_DATA) 
              public data: DialogData,
              private dialogRef: MatDialogRef<RecordingDialogComponent>,
              public ts: TranslationService,
              private recordAudioService: RecordAudioService) { }
  
  newRecording : boolean = false;
  isRecording: boolean = false;
  showAudio: boolean = false;
  errorText: string = "";  
  audioSource : SafeUrl | null = null;
  
  /*
  * Start and stop recording
  */
  record() {
    if(this.isRecording) {
      this.newRecording = this.recordAudioService.stopRecording();
    }
    else {
      this.showAudio = false;
      this.newRecording = false;
      this.recordAudioService.recordAudio();
    }
    this.isRecording = !this.isRecording;
  }


/*
* Playback the recorded audio
*/
  getAudio() {
    this.showAudio = true;
    this.audioSource = this.recordAudioService.playbackAudio();
  }

/*
* Add the audio fedback to the database
*/
  saveAudio() {
    this.getAudio();
    
    if (this.data.type == "feedbackAudio") {
      this.errorText = this.recordAudioService.saveAudioFeedback(this.data.id);
      if(!this.errorText) {
        this.dialogRef.close(true);
      }
    }
    else if (this.data.type == "messageAudio") {
      this.dialogRef.close(this.audioSource);
    }
    else {
      this.dialogRef.close(false);
    }
  }

}
