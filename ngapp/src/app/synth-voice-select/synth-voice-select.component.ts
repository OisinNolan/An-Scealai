import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Voice, voices } from 'app/core/services/synthesis.service';
import { TranslationService } from 'app/core/services/translation.service';
@Component({
  selector: 'synth-voice-select',
  templateUrl: './synth-voice-select.component.html',
})
export class SynthVoiceSelectComponent implements OnInit{
  constructor(public ts: TranslationService) { }

  voices = voices;
  selected = this.voices[0];

  @Output() selectVoice = new EventEmitter<Voice>();

  ngOnInit(){ this.selectVoice.emit(this.selected) }

  // DEPRECATED
  color(gender: 'male'|'female'): string {
    return gender.startsWith('f') ? 'rgba(255, 191, 194)' : 'rgba(194, 218, 255)';
  }
}
