import {
  Component,
  OnInit,
  HostListener,
  ViewEncapsulation,
  ViewChild,
  Renderer2 } from '@angular/core';
import { LANGUAGE, StoryService } from '../../story.service';
import { Story } from '../../story';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  NavigationStart } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NotificationService } from '../../notification-service.service';
import { HighlightTag, } from 'angular-text-input-highlight';
import { Subject } from 'rxjs';
import { EventType } from '../../event';
import { EngagementService } from '../../engagement.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { TranslationService } from '../../translation.service';
import { StatsService } from '../../stats.service';
import { ClassroomService } from '../../classroom.service';
import { GrammarCheckerComponent } from 'src/app/student-components/grammar-checker/grammar-checker.component';
import { Quill } from 'quill';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class DashboardComponent implements OnInit {

  @ViewChild('grammarChecker') grammarChecker: GrammarCheckerComponent;

  story: Story = new Story();
  stories: Story[];
  id: string;
  storyFound: boolean;
  storySaved: boolean = true;
  feedbackVisible: boolean;
  dictionaryVisible: boolean;
  audioSource: SafeUrl;
  filteredTags: Map<string, HighlightTag[]> = new Map();
  checkBox: Map<string, boolean> = new Map();
  modalClass : string = "hidden";
  modalChoice: Subject<boolean> = new Subject<boolean>();
  teacherSelectedErrors: String[] = [];
  classroomId: string;
  selectTeanglann: boolean = true;
  selectExternalLinks: boolean = false;

  
  // OPTIONS (to show or not to show)
  showOptions: boolean = true;
  dontToggle: boolean = false;

  // WORD COUNT
  words: string[] = [];
  wordCount: number = 0;
  
  dialects = [
    {
      code : "connemara",
      name : this.ts.l.connacht
    },
    {
      code : "kerry",
      name : this.ts.l.munster
    },
    {
      code : "donegal",
      name : this.ts.l.ulster
    }
  ];
  
  quillToolbar = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote'/*, 'code-block'*/],
      //[{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      //[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      //[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      //[{ 'direction': 'rtl' }],                         // text direction
      //[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean'],                                         // remove formatting button
      //['link', 'image', 'video']                        // link and image, video
    ]
  };
  
  constructor(
    private storyService: StoryService,
    private route: ActivatedRoute,
    private auth: AuthenticationService,
    protected sanitizer: DomSanitizer,
    private notifications: NotificationService,
    private router: Router,
    private engagement: EngagementService,
    public ts: TranslationService,
    public statsService: StatsService,
    public classroomService: ClassroomService,
  ) {}

  /*
  * set the stories array of all the student's stories 
  * and the current story being edited given its id from url 
  */
  ngOnInit() {
    this.storySaved = true;
    // Get the stories from the storyService and run
    // the following function once that data has been retrieved
    this.getStories().then(stories => {
      this.stories = stories;
      console.log(this.stories);
      // Get the story id from the URL in the same way
      this.getStoryId().then(params => {
        this.id = params['id'];
        // loop through the array of stories and check
        // if the id in the url matches one of them
        // if no html version exists yet, create one from the plain text
        for(let story of this.stories) {
          if(story._id === this.id) {
            this.story = story;
            this.getWordCount(this.story.text);
            if(this.story.htmlText == null) {
              this.story.htmlText = this.story.text;
            }
            break;
          }
        }
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
          }
        );
  }

/*
* return the student's set of stories using the story service 
*/
  
  getStories(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storyService.getStoriesForLoggedInUser().subscribe(
        (stories: Story[]) => {
          resolve(stories);
        }
      )
    });
  }

  /*
  * return the story id using the routing parameters
  */
  getStoryId(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.route.params.subscribe(
        params => {
          resolve(params);
      });
    });
  }

  /*
  * Update story data (text htmlText and date) using story service
  * Add logged event for saved story  using engagement service
  */
  saveStory() {
    if (this.story === undefined) {
      throw new Error('Tried to save story but this.story is undefined');
    }


    this.storyService
        .updateStory(this.story)
        .toPromise()
        .then(
          () => {
            console.count('STORY SAVED');
          });
    this.storySaved = true;
    console.count('Story saved');
  }

  showDictionary() {
    this.dictionaryVisible = true;
    this.engagement.addEventForLoggedInUser(EventType['USE-DICTIONARY']);
  }

/*
* Get audio feedback with function call 
* Set feedback status to seen by student and remove story from not yet seen array
* Add logged event for viewed feedback 
*/
  getFeedback() {
    this.dictionaryVisible = false;
    this.feedbackVisible = true;
    this.getFeedbackAudio();
    // set feedback status to seen by student
    if (this.story.feedback.text != "") {
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

  // Set story saved to false
  storyEdited(quill) {
    this.story.text = quill.text;
    this.storySaved = false;
    if (this.grammarChecker.shouldRunGramadoir()) {
      this.saveStory();
    }
  }
  
  // Get word count of story text
  getWordCount(text) {
    let str = text.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
    this.words = [];
    str.map((s) => {
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
      !this.story.feedback.seenByStudent) {
      return true;
    }
    return false;
  }

  // route to synthesis 
  goToSynthesis() {
    this.router.navigateByUrl('/synthesis/' + this.story._id);
  }

  // route to synthesis 
  goToRecording() {
    this.router.navigateByUrl('/record-story/' + this.story._id);
  }

  /*
  * Update the grammar error map of the stat object corresponding to the current student id
  */
  updateStats() {
    const userDetails = this.auth.getUserDetails();
    if (!userDetails) {
      return;
    }
    this.statsService
        .updateGrammarErrors(
          userDetails._id,
          this.grammarChecker.filteredTags,
          new Date())
        .subscribe();
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
  saveModal() {
    this.saveStory();
    this.modalChoice.next(true);
  }

  toggleOptions() {
    if (!this.dontToggle) {
      this.showOptions = !this.showOptions;
    }
    this.dontToggle = false;
  }

  handleGrammarCheckerOptionClick() {
    this.dontToggle = true;
    this.defaultMode();
    this.grammarChecker.hideEntireGrammarChecker =
      !this.grammarChecker.hideEntireGrammarChecker;
  }
  
  storySavedByGrammarChecker(story: Story) {
    if (this.story.htmlText === story.htmlText) {
      this.storySaved = true;
    }
  }
}
