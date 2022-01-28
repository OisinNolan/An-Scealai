import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
} from '@angular/core';
import { StoryService } from '../../story.service';
import { Story } from '../../story';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { AuthenticationService } from '../../authentication.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NotificationService } from '../../notification-service.service';
import { HighlightTag, } from 'angular-text-input-highlight';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { EventType } from '../../event';
import { EngagementService } from '../../engagement.service';

import {
  GrammarTag,
  GramadoirRuleId,
  GrammarService,
  ReadableGramadoirRuleIds,
} from '../../grammar.service';

import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { TranslationService } from '../../translation.service';
import { StatsService } from '../../stats.service';
import { ClassroomService } from '../../classroom.service';
import { TextProcessingService } from 'src/app/services/text-processing.service';
import { SynthesisService } from 'src/app/services/synthesis.service';
import { SynthesisPlayerComponent } from 'src/app/student-components/synthesis-player/synthesis-player.component';
import { SynthesisBankService } from 'src/app/services/synthesis-bank.service';
import { GrammarCheckerComponent } from 'src/app/student-components/grammar-checker/grammar-checker.component';
import Quill from 'quill';
import { QuillHighlightService } from 'src/app/services/quill-highlight.service';
import clone from 'lodash/clone';
import config from 'src/abairconfig.json';

const Parchment = Quill.import('parchment');
const gramadoirTag =
  new Parchment.Attributor.Attribute(
    'gramadoir-tag',
    'data-gramadoir-tag', {
      scope: Parchment.Scope.INLINE
    });

Quill.register(gramadoirTag);

const Tooltip = Quill.import('ui/tooltip');

type QuillHighlightTag = {
  start: number;
  length: number;
  type: GramadoirRuleId;
  tooltip: typeof Tooltip;
  color: string;
  messages: {
    en: string;
    ga: string;
  };
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.css',
    './../../gramadoir-tags.css'],
  encapsulation: ViewEncapsulation.None
})

export class DashboardComponent implements OnInit{

  @ViewChild('mySynthesisPlayer') synthesisPlayer: SynthesisPlayerComponent;
  // @ViewChild('grammarChecker') grammarChecker: GrammarCheckerComponent;

  // So that we can use this in the template
  ReadableGramadoirRuleIds = ReadableGramadoirRuleIds;

  story: Story = new Story();
  mostRecentAttemptToSaveStory = new Date();
  stories: Story[];
  saveStoryDebounceId = 0;
  id: string;
  storyFound: boolean;
  storySaved = true;
  feedbackVisible: boolean;
  dictionaryVisible: boolean;
  audioSource: SafeUrl;
  filteredTags: Map<string, HighlightTag[]> = new Map();
  checkBox: Map<string, boolean> = new Map();
  chosenTag: GrammarTag;
  mostRecentGramadoirRequestTime = null;
  grammarLoading = true;
  grammarSelected = true;
  grammarTagsHidden = true;
  grammarSettingsHidden = false;
  mostRecentGramadoirInput: string = null;
  currentGramadoirHighlightTags: QuillHighlightTag[] = null;
  grammarTagFilter: object = {};
  currentGrammarErrorTypes = {};
  modalClass = 'hidden';
  modalChoice: Subject<boolean> = new Subject<boolean>();
  teacherSelectedErrors: string[] = [];
  classroomId: string;
  selectTeanglann = true;

  downloadStoryFormat = '.pdf';

  gramadoirResponse: string;

  // OPTIONS (to show or not to show)
  showOptions = true;
  dontToggle = false;

  // WORD COUNT
  words: string[] = [];
  wordCount = 0;

  audioSources = [];

  htmlDataIsReady = false;
  quillEditor: Quill;
  textUpdated: Subject<string> = new Subject<string>();

  dialects = [
    {
      code : 'connemara',
      name : this.ts.l.connacht
    },
    {
      code : 'kerry',
      name : this.ts.l.munster
    },
    {
      code : 'donegal',
      name : this.ts.l.ulster
    }
  ];

  quillToolbar = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote'/*, 'code-block'*/],
      //  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ list: 'ordered'}, { list: 'bullet' }],
      //  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      //  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      //  [{ 'direction': 'rtl' }],                         // text direction
      //  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],          // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ['clean'],                                         // remove formatting button
      //  ['link', 'image', 'video']                        // link and image, video
    ],
    // scrollingContainer: false,
  };

  stringifySynth(i: number) {
    if (this.audioSources[i]) {
      return JSON.stringify(this.audioSources[i]);
    }
    return 'not defined';
  }


  constructor(
    protected sanitizer: DomSanitizer,
    private storyService: StoryService,
    private route: ActivatedRoute,
    private auth: AuthenticationService,
    private notifications: NotificationService,
    private router: Router,
    private engagement: EngagementService,
    private grammar: GrammarService,
    public ts: TranslationService,
    public statsService: StatsService,
    public classroomService: ClassroomService,
    public quillHighlightService: QuillHighlightService,
  ) {
    this.textUpdated.pipe(
      debounceTime(1500),
      distinctUntilChanged(),
    ).subscribe(async () => {
      const textToCheck = this.story.text.replace(/\n/g, ' ');
      if (textToCheck !== this.mostRecentGramadoirInput) {
        const grammarCheckerTime = new Date();
        this.mostRecentGramadoirRequestTime = grammarCheckerTime;
        this.grammarLoading = true;
        try {
        await this.quillHighlightService
            .updateGrammarErrors(this.quillEditor, textToCheck)
            .then((errTypes: object) => {
              this.currentGrammarErrorTypes = errTypes;
              Object.keys(errTypes).forEach((k) => {
                this.grammarTagFilter[k] !== undefined ?
                this.grammarTagFilter[k] = this.grammarTagFilter[k] :
                this.grammarTagFilter[k] = true;
              });
              this.quillHighlightService
                  .filterGramadoirTags(this.grammarTagFilter);
              this.grammarTagsHidden ?
              this.quillHighlightService
                  .clearAllGramadoirTags(this.quillEditor) :
              this.quillHighlightService
                  .applyGramadoirTagFormatting(this.quillEditor);
            });
        } catch (updateGrammarErrorsError) {
          if ( !this.grammarTagsHidden) {
            window.alert(
              'There was an error while trying to fetch grammar ' +
              'suggestions from the Gramadóir server:\n' +
              updateGrammarErrorsError.message + '\n' +
              'See the browser console for more information');
          }
          console.dir(updateGrammarErrorsError);
        }
        if (grammarCheckerTime === this.mostRecentGramadoirRequestTime) {
          this.grammarLoading = false;
        }
      }
    });
  }

  getSelectedMessage() {
    return this.quillHighlightService.getMostRecentMessage();
  }

  grammarCheckBoxEvent(key: string, event: boolean) {
    this.grammarTagFilter[key] = event;
    this.quillHighlightService
        .filterGramadoirTags(this.grammarTagFilter);
    this.quillHighlightService
        .clearAllGramadoirTags(this.quillEditor);
    if (!this.grammarTagsHidden) {
      this.quillHighlightService
          .applyGramadoirTagFormatting(this.quillEditor);
    }
  }

  leathanCaolCheckBox(event: boolean) {
    this.quillHighlightService.showLeathanCaol = event;
    console.log(this.quillHighlightService.showLeathanCaol, event);
    this.quillHighlightService
        .clearAllGramadoirTags(this.quillEditor);
    if (!this.grammarTagsHidden) {
      this.quillHighlightService
          .applyGramadoirTagFormatting(this.quillEditor);
    }
  }

  setAllCheckBoxes(value: boolean) {
    this.quillHighlightService
        .showLeathanCaol = value;
    Object.keys(this.grammarTagFilter)
        .forEach((k) => {
          this.grammarTagFilter[k] = value;
        });
    this.quillHighlightService
        .filterGramadoirTags(this.grammarTagFilter);
    this.quillHighlightService
        .clearAllGramadoirTags(this.quillEditor);
    if (!this.grammarTagsHidden) {
      this.quillHighlightService
          .applyGramadoirTagFormatting(this.quillEditor);
    }
  }

  // set the stories array of all the student's stories
  // set the stories array of all the student's stories w
  // and the current story being edited given its id from url
  ngOnInit() {
    this.storySaved = true;
    // Get the stories from the storyService and run
    // the following function once that data has been retrieved
    this.getStories().then(stories => {
      this.stories = stories;
      // Get the story id from the URL in the same way
      this.getStoryId().then(params => {
        this.id = params.id;
        // loop through the array of stories and check
        // if the id in the url matches one of them
        // if no html version exists yet, create one from the plain text
        // TODO Woah that's gotta be slow (Neimhin 15 July 2021)
        for (const story of this.stories) {
          if (story._id === this.id) {
            this.story = story;
            this.getWordCount(this.story.text);
            if (this.story.htmlText == null) {
              this.story.htmlText = this.story.text;
            }
            this.htmlDataIsReady = true;
            break;
          }
        }
        }).catch(error => {
          this.story.text = JSON.stringify(error);
          throw error;
      }).catch(error => {
        this.story.text = JSON.stringify(error);
      });
    });


    // GET CLASSROOM ID
    const userDetails = this.auth.getUserDetails();
    if (!userDetails) {
      return;
    }
    this.classroomService
        .getClassroomOfStudent(
          userDetails._id)
        .subscribe(
          (res) => {
            if (res) {
              this.classroomId = res._id;
            }
          });
  }

  // return the student's set of
  // stories using the story service
  getStories(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storyService
          .getStoriesForLoggedInUser()
          .subscribe({
            next: (stories: Story[]) => {
              resolve(stories);
            },
            error: (error: Error) => {
              reject(error);
            },
          });
    });
  }

  // return the url params (which contains the id,
  // presuming dashboard component is only
  // used on a url with a story id) using
  // the routing parameters
  getStoryId(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.route.params.subscribe(
        params => resolve(params),
        error => reject(error)
      );
    });
  }

  hideGrammarTags(){
    this.grammarTagsHidden = true;
    this.quillHighlightService
        .clearAllGramadoirTags(this.quillEditor);
  }

  showGrammarTags(){
    this.grammarTagsHidden = false;
    this.quillHighlightService
        .applyGramadoirTagFormatting(this.quillEditor);
  }

  // Update story data (text and date) using story service
  // Add logged event for saved story  using engagement service
  async saveStory(debounceId: number | 'modal', finishedWritingTime: Date) {
    const saveAttempt = new Date();
    this.mostRecentAttemptToSaveStory = saveAttempt;

    if (! this.story._id) {
      return window.alert('Cannot save story. The id is not known');
    }

    const unhighlightedHtmlText =
      this.stripGramadoirAttributesFromHtml(
        clone(this.story.htmlText));

    const updateData = {
      title: this.story.title,
      dialect: this.story.dialect,
      text : this.story.text,
      htmlText: unhighlightedHtmlText,
      lastUpdated : finishedWritingTime,
    };

    this.engagement
        .addEventForLoggedInUser(
          EventType['SAVE-STORY'],
          this.story);

    const saveStoryPromise = this
        .storyService
        .updateStory(updateData, this.story._id)
        .toPromise();

    try {
      await saveStoryPromise;
      if (debounceId === this.saveStoryDebounceId) {
        this.storySaved = true;
        console.count('STORY SAVED');
        console.log(debounceId);
      } else if (debounceId === 'modal') {
        this.storySaved = true;
      }
    }
    catch (error) {
      window.alert('Error while trying to save story: ' + error.message);
      throw error;
    }

    try {
      if (saveAttempt === this.mostRecentAttemptToSaveStory) {
        this.storySaved = true;
      }
    } catch (error) {
      window.alert('Error setting storySaved to true: ' + error.message);
      throw error;
    }
    return;
  }

  stripGramadoirAttributesFromHtml(text: string){
    return text
        .replace(
            /\s*data-gramadoir-tag(-style-type)?="([^"])+"/g,
            '')
        .replace(
            /\s*data-vowel-agreement-tag="([^"])+"/g,
            '');
  }

  debounceSaveStory() {
    this.saveStoryDebounceId++;
    const myId = this.saveStoryDebounceId;
    const finishedWritingTime = new Date();
    setTimeout(() => {
      this.saveStoryDebounceCallback(myId, finishedWritingTime);
    }, 1000);
  }

  saveStoryDebounceCallback(myId: number, finishedWritingTime: Date) {
    if (myId === this.saveStoryDebounceId) {
      this.saveStory(myId, finishedWritingTime);
    }
  }

  showDictionary() {
    if (!!this.dictionaryVisible === false) {
      this.engagement.addEventForLoggedInUser(EventType['USE-DICTIONARY']);
    }
    this.dictionaryVisible = !this.dictionaryVisible;
  }

  // Get audio feedback with function call
  // Set feedback status to seen by student
  // and remove story from not yet seen array
  // Add logged event for viewed feedback
  getFeedback() {
    this.feedbackVisible = !this.feedbackVisible;
    this.getFeedbackAudio();
    // set feedback status to seen by student
    if (this.story.feedback.text !== '') {
      this.story.feedback.seenByStudent = true;
    }
    this.notifications.removeStory(this.story);
    this.storyService.viewFeedback(this.story._id).subscribe(() => {
      this.engagement.addEventForLoggedInUser(EventType['VIEW-FEEDBACK'], this.story);
    });
  }

  /*
  * set the url for the audio source feedback
  */
  getFeedbackAudio() {
    this.storyService.getFeedbackAudio(this.story._id).subscribe((res) => {
      this.audioSource = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(res));
    });
  }

  // Set story.text to most recent version of
  // editor text and then switch to storyEditedAlt
  storyEdited(q: any) {
    this.story.text = q.text;
    this.textUpdated.next(q.text);
    this.getWordCount(q.text);
    this.storyEdited = this.storyEditedAlt;
  }

  storyEditedAlt(q: any) {
    this.story.text = q.text;
    this.textUpdated.next(q.text);
    this.getWordCount(q.text);
    this.storySaved = false;
    this.debounceSaveStory();
  }


  downloadStoryUrl() {
    return config.baseurl +
      'story/downloadStory/' +
      this.story._id + '/' +
      this.downloadStoryFormat;
  }

  // Get word count of story text
  getWordCount(text: string) {
    if (!text) { return 0; }
    const str = text.replace(/[\t\n\r\.\?\!]/gm, ' ').split(' ');
    this.words = [];
    str.map((s: string) => {
      const trimStr = s.trim();
      if (trimStr.length > 0) {
        this.words.push(trimStr);
      }
    });
    this.wordCount = this.words.length;
  }

  // set feedback window to false
  closeFeedback() {
    this.feedbackVisible = false;
  }

  /**
   * Closes feedback, grammar checker, and dictionary windows,
   * setting text editor to 'default' mode.
   */
  defaultMode() {
    this.feedbackVisible = false;
    this.dictionaryVisible = false;
  }

// return whether or not the student has viewed the feedback
  hasNewFeedback(): boolean {
    if (
      this.story &&
      this.story.feedback &&
      this.story.feedback.seenByStudent === false) {
      return true;
    }
    return false;
  }

  // route to synthesis
  goToSynthesis() {
    this.synthesisPlayer.toggleHidden();
    // this.router.navigateByUrl('/synthesis/' + this.story._id);
  }

  // route to synthesis
  goToRecording() {
    this.router.navigateByUrl('/record-story/' + this.story._id);
  }

  // set modalClass to visible fade
  showModal() {
    this.modalClass = 'visibleFade';
  }

  // set modalClass to hidden fade and next choice to false
  hideModal() {
    this.modalClass = 'hiddenFade';
    this.modalChoice.next(false);
  }

  // set next modal choice to true
  setModalChoice() {
    this.modalChoice.next(true);
  }

  // save story and set next modal choice to true
  async saveModal() {
    try {
      await this.saveStory('modal', new Date());
      this.modalChoice.next(true);
    } catch (error) {
      window.alert('Your story was not saved. You should copy your story to another program to save it. Otherwise it may be lost.');
      this.hideModal();
    }
  }

  toggleOptions() {
    if  (!this.dontToggle){
      this.showOptions = !this.showOptions;
    }
    this.dontToggle = false;
  }

  // handleGrammarCheckerOptionClick() {
  //   this.dontToggle = true;
  //   this.defaultMode();
  //   this.grammarChecker.hideEntireGrammarChecker =
  //     !this.grammarChecker.hideEntireGrammarChecker;
  // }

  storySavedByGrammarChecker(story: Story) {
    if (this.story.htmlText === story.htmlText) {
      this.storySaved = true;
    }
  }
}
