import { Component, OnInit, HostListener, ViewEncapsulation, Renderer2 } from '@angular/core';
import { StoryService } from '../../story.service';
import { Story } from '../../story';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NotificationService } from '../../notification-service.service';
import { HighlightTag, } from 'angular-text-input-highlight';
import { Subject } from 'rxjs';
import { EventType } from '../../event';
import { EngagementService } from '../../engagement.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  story: Story;
  stories: Story[];
  id: string;
  storyFound: boolean;
  storySaved: boolean;
  popupVisible: boolean;
  feedbackVisible: boolean;
  audioSource: SafeUrl;
  grammarChecked: boolean = false;
  tags: HighlightTag[] = [];
  visibleTags: HighlightTag[] = [];
  tagFilters: Array<string> = [];
  chosenTag: GrammarTag;
  grammarLoading: boolean = false;
  modalClass : string = "hidden";

  constructor(private storyService: StoryService, private route: ActivatedRoute,
    private auth: AuthenticationService, protected sanitizer: DomSanitizer,
    private notifications: NotificationService, private router: Router,
    private engagement: EngagementService) {

    }

  ngOnInit() {
    this.storySaved = true;
    // Get the stories from the storyService, and run
    // the following function once that data has
    // been retrieved.
    this.getStories().then(stories => {
      this.stories = stories;
      // Get the story id from the URL in the same way
      this.getStoryId().then(params => {
        this.id = params['id'];
        // loop through the array of stories and check
        // if the id in the url matches one of them
        for(let story of this.stories) {
          if(story.id === this.id) {
            this.story = story;
            break;
          }
        }
      });
    });
  }

  getStories(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storyService.getStoriesForLoggedInUser().subscribe(
        (stories: Story[]) => {
          resolve(stories);
        }
      )
    });
  }

  getStoryId(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.route.params.subscribe(
        params => {
          resolve(params);
      });
    });
  }

  saveStory() {
    this.route.params.subscribe(
      params => {
        console.log(this.story.text);
        this.storyService.updateStory(this.story.text, params['id']);
        this.engagement.addEventForLoggedInUser(EventType["SAVE-STORY"], this.story);
        this.storySaved = true;
      }
    )
  }

  getFeedback() {
    this.popupVisible = false;
    this.feedbackVisible = true;
    this.getFeedbackAudio();
    this.story.feedback.seenByStudent = true;
    this.notifications.removeStory(this.story);
    this.storyService.viewFeedback(this.story._id).subscribe(() => {
      this.engagement.addEventForLoggedInUser(EventType["VIEW-FEEDBACK"], this.story);
    });
  }

  getFeedbackAudio() {
    this.storyService.getFeedbackAudio(this.story._id).subscribe((res) => {
      this.audioSource = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(res));
    });
  }

  storyEdited() {
    this.storySaved = false;
  }

  closeFeedback() {
    this.feedbackVisible = false;
  }

  hasNewFeedback() : boolean {
    if(this.story && this.story.feedback.seenByStudent === false) {
      return true;
    }
    return false;
  }

  goToSynthesis() {
    this.router.navigateByUrl('/synthesis/' + this.story.id);
  }

  runGramadoir() {
    this.saveStory();
    this.popupVisible = false;
    this.grammarChecked = false;
    this.grammarLoading = true;
    this.tags = [];
    this.chosenTag = null;
    this.storyService.gramadoir(this.story._id).subscribe((res) => {
      res.forEach(g => {
        console.log(g);
        let tag : HighlightTag = {
          indices: {
            start: +g.fromx,
            end: +g.tox+1,
          },
          cssClass: GrammarTag.getCssClassFromRule(GrammarTag.getRuleFromRuleId(g.ruleId)),
          data: g
        };
        this.tags.push(tag);
      });
      this.grammarLoading = false;
      this.grammarChecked = true;
      this.engagement.addEventForLoggedInUser(EventType["GRAMMAR-CHECK-STORY"], this.story);
    });
  }

  chooseGrammarTag(tag: HighlightTag) {
    this.chosenTag = new GrammarTag(tag.data);
  }

  closeGrammar() {
    this.grammarChecked = false;
    this.tags = [];
    this.chosenTag = null;
  }

  addTagHoverClass(tagElement: HTMLInputElement) {
    tagElement.classList.remove("tagNotHover");
    tagElement.classList.add("tagHover");
  }

  removeTagHoverClass(tagElement: HTMLInputElement) {
    tagElement.classList.remove("tagHover");
    tagElement.classList.add("tagNotHover");
  }

  addTagFilter(filter: string) {
    this.tagFilters.push(filter);
    //this.refreshHighlights();
  }

  removeTagFilter(filter: string) {
    let i = this.tagFilters.indexOf(filter);
    if(i > -1) {
      this.tagFilters.splice(i, 1);
    }
    //this.refreshHighlights();
  }

  wasInside : boolean = false;
  
  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }
  
  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.popupVisible = false;
    }
    this.wasInside = false;
  }
  
  showModal() {
    this.modalClass = "visibleFade";
  }

  hideModal() {
    this.modalClass = "hiddenFade";
    this.modalChoice.next(false);
  }

  modalChoice: Subject<boolean> = new Subject<boolean>();

  setModalChoice() {
    this.modalChoice.next(true);
  }

  saveModal() {
    this.saveStory();
    this.modalChoice.next(true);
  }

}

class GrammarTag {
  message: string;
  rule: string;

  constructor(tagData: any) {
    this.rule = GrammarTag.getRuleFromRuleId(tagData.ruleId);
    this.message = GrammarTag.getMessageFromRule(this.rule);
    if(!this.message) {
      this.message = tagData.msg;
    }
  }

  static getMessageFromRule(rule: string) : string {
    if(rule === 'SEIMHIU') {
      return "Séimhiu missing";
    }
    if(rule === 'URU') {
      return "This noun should be plural.";
    }
    // etc.
  }

  static getCssClassFromRule(rule: string) : string {
    return rule.toLowerCase() + "-color tagNotHover";
  }

  static getRuleFromRuleId(ruleId: string) : string {
    return ruleId.split('/')[1];
  }
}
