import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'app/translation.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StoryService } from 'app/story.service';
import { AuthenticationService } from 'app/authentication.service';
import { NewStoryComponent } from 'app/student-components/new-story/new-story.component';

@Component({
  selector: 'app-state-exam-prompts',
  templateUrl: './state-exam-prompts.component.html',
  styleUrls: ['./state-exam-prompts.component.scss']
})
export class StateExamPromptsComponent implements OnInit {
  currentPromptIndex: number;
  promptExists: boolean = false;
  userLevel: string;
  levelForm: FormGroup;
  currentPromptBank: string[];
  newStoryForm: FormGroup;
  prompt: string;
  levelPreferences: string[] = ['jc', 'lcol', 'lchl'];
  dialectPreferences: string[] = ['connemara', 'donegal', 'kerry']

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private storyService: StoryService,
    public ts: TranslationService,
  ) { this.sepCreateForm(); }

  ngOnInit(): void {
    console.log("State exam prompts init");
    console.log(this.promptExists);
  }

  sepCreateForm() {
    this.levelForm = this.fb.group({
      level: ['jc']
    });
    this.newStoryForm = this.fb.group({
      title: ['', Validators.required],
      dialect: ['connemara']
    });
  }

  sepAddNewStory(title, dialect, text) {
    let date = new Date();
    let username = this.auth.getUserDetails().username;
    let studentId = this.auth.getUserDetails()._id;
    this.storyService.saveStory(studentId, title, date, dialect, text, username);
  }

  returnLevel(level: string) {
    if(level === 'jc'){
      return this.ts.l.sep_jc_choices;
    } else if (level == 'lcol'){
      return this.ts.l.sep_lcol_choices;
    } else {
      return this.ts.l.sep_lchl_choices;
    }
  }

  currentPrompt() {
    let bank = this.levelForm.controls['level'].value;
    if(bank === 'jc'){
      this.currentPromptBank = this.ts.l.sep_jc_choices;
    } else if(bank === 'lcol') {
      this.currentPromptBank = this.ts.l.sep_lcol_choices;
    } else {
      this.currentPromptBank = this.ts.l.sep_lchl_choices;
    }
  }

  //Try find a way to not have the arrays in ts service
  randomPrompt(promptArray: string[]) {
    this.promptExists = true;
    this.currentPromptIndex = Math.floor(Math.random() * promptArray.length);
    this.prompt = this.currentPromptBank[this.currentPromptIndex];
    return this.currentPromptIndex;
  }
}