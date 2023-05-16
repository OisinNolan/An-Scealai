import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { firstValueFrom, Subject  } from 'rxjs';
import { TranslationService, MessageKey } from 'app/core/services/translation.service';
import Quill from 'quill';
import ImageCompress from 'quill-image-compress';

Quill.register('modules/imageCompress', ImageCompress);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.scss',
    './../../lib/quill-highlight/gramadoir-tags.scss',
    './../../../quill.fonts.scss',
  ],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  showFiller = false;
  dontToggle = false;
  showOptions = true;
  showErrorTags = false;
  storySaved = true;
  feedbackVisibile: false;
  quillEditor: Quill;
  quillToolbar = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote'],
      [{ 'header': 1 }, { 'header': 2 }],
      [{ list: 'ordered'}, { list: 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ align: [] }],
      ['clean'],
      ['image']
    ],
    imageCompress: { // used to compress any images added to the story
      quality: 0.7,
      maxWidth: 500,
      maxHeight: 500,
      imageType: 'image/png',
      debug: false, // console logs
      suppressErrorLogging: false,
      insertIntoEditor: undefined,
    }
  };
  private textUpdated= new Subject<void | string>();
  

  constructor(public ts: TranslationService,) { }

  story = {
    text: 'hello',
    title: 'test',
    createdWithPrompts: false
  }


  ngOnInit(): void {
  }

    /* 
   * Update story text with what the student has written with quill
   * Call functions to save story to DB
  */
    onContentChanged(q: {
      editor: Quill;
      html: string;
      text: string;
      content: any;
      delta: any; // TODO actual type is Quill Delta
      oldDelta: any; // TODO actual type is Quill Delta
      source: 'user'|'api'|'silent'|undefined
    }) {
      this.story.text = q.text;
      this.getWordCount(q.text);
      switch(q.source) {
        case 'user':
          this.storySaved = false;
          this.textUpdated.next(q.text);
          this.debounceSaveStory();
      }
    }

    /**
   * Initialise quill editor and highlighter
   * @param q quill editor
   */
  onEditorCreated(q: Quill) {
    q['history'].options.userOnly = true; // prevent ctrl z from deleting text
    this.quillEditor = q;
    this.quillEditor.root.setAttribute("spellcheck", "false");
    //this.quillHighlighter = new QuillHighlighter(this.quillEditor, this.ts, this.engagement);
  }

    getWordCount(text) {

    }

    debounceSaveStory() {

    }

    /* Toggle upper menu buttons */
    toggleOptions() {
      if (!this.dontToggle){
        this.showOptions = !this.showOptions;
      }
      this.dontToggle = false;
    }

      /* If story not saved, make title italic */
  titleStyle() {
    return {'font-style': this.storySaved ? 'normal' : 'italic'};
  }

    downloadStoryUrl() {

    }

    hasNewFeedback() {

    }

    toggleGrammarButton() {
      const key: MessageKey = this.showErrorTags ?
      'hide_grammar_suggestions': 
      'show_grammar_suggestions';
    return this.ts.message(key);

    }

    toggleGrammarTags() {

    }

    showModal() {

    }

    selectedGrammarSuggestion() {
      return 'test';
    }

    goToSynthesis() {
      
    }
}
