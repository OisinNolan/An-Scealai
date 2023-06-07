import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { TranslationService } from "app/core/services/translation.service";
import { AuthenticationService } from "app/core/services/authentication.service";
import { StoryService } from "app/core/services/story.service";
import { EngagementService } from "app/core/services/engagement.service";
import { RecordingService } from "../../core/services/recording.service";
import { EventType } from "../../core/models/event";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { BasicDialogComponent } from "../../dialogs/basic-dialog/basic-dialog.component";
import { Story } from "app/core/models/story";

@Component({
  selector: "app-story-drawer",
  templateUrl: "./story-drawer.component.html",
  styleUrls: ["./story-drawer.component.scss"],
})
export class StoryDrawerComponent implements OnInit {
  stories: Story[] = [];
  dialogRef: MatDialogRef<unknown>;
  lastClickedStoryId: string = "";
  searchText: string = ""; // used to filter stories in search bar
  @Output() storyEmitter = new EventEmitter<Story>();
  @Output() hasFeedback = new EventEmitter<Boolean>();
  @Output() storiesLoadedEmitter = new EventEmitter<Boolean>();

  constructor(
    public ts: TranslationService,
    private auth: AuthenticationService,
    private storyService: StoryService,
    private engagement: EngagementService,
    private recordingService: RecordingService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getStories();
  }

  /**
   * Get list of stories for the user and emit when done loading
   */
  async getStories() {
    this.stories = (
      await firstValueFrom(this.storyService.getStoriesForLoggedInUser())
    ).map((storyData) => new Story().fromJSON(storyData));

    if (this.stories.length > 0) {
      this.stories.sort((a, b) => (a.date > b.date ? -1 : 1));
      this.setStory(this.stories[0]);
      this.storiesLoadedEmitter.emit(true);
    }
  }

  /**
   * Set the current story to the selected one from the story list
   * @param story Selected story from HTML
   */
  setStory(story: Story) {
    if (story.htmlText == null) {
      story.htmlText = story.text;
    }
    // emit selected story to dashboard
    this.storyEmitter.emit(story);

    // emit whether or not the story has any feedback
    story.feedback.text ||
    story.feedback.audioId ||
    story.feedback.feedbackMarkup
      ? this.hasFeedback.emit(true)
      : this.hasFeedback.emit(false);

    // set css for selecting a story in the side nav
    let id = story._id;
    let storyElement = document.getElementById(id);
    if (storyElement) {
      // remove css highlighting for currently highlighted story
      if (this.lastClickedStoryId) {
        document.getElementById(this.lastClickedStoryId).classList.remove("clickedresultCard");
      }
      this.lastClickedStoryId = id;
      // add css highlighting to the newly clicked story
      storyElement.classList.add("clickedresultCard");
    }
  }

  /**
   * Create a new story
   */
  createNewStory() {
    this.dialogRef = this.dialog.open(BasicDialogComponent, {
      data: {
        title: this.ts.l.story_details,
        type: "select",
        data: [
          this.ts.l.enter_title,
          [this.ts.l.connacht, this.ts.l.munster, this.ts.l.ulster],
          [this.ts.l.title, this.ts.l.dialect],
        ],
        confirmText: this.ts.l.save_details,
        cancelText: this.ts.l.cancel,
      },
      width: "50vh",
    });

    this.dialogRef.afterClosed().subscribe(async (res) => {
      this.dialogRef = undefined;
      if (res) {
        if (res[0]) {
          let dialect = "connemara";
          if (res[1] == this.ts.l.munster) dialect = "kerry";
          if (res[1] == this.ts.l.ulster) dialect = "donegal";
          this.storyService
            .saveStory( this.auth.getUserDetails()._id, res[0], new Date(), dialect, "", this.auth.getUserDetails().username, false )
            .subscribe({
              next: () => {
                this.getStories();
              },
              error: () => {
                alert("Not able to create a new story");
              },
            });
        } else {
          alert(this.ts.l.title_required);
        }
      }
    });
  }

  /**
   * Delete the given story and any associated recordings
   * @param id story id to be deleted
   */
  deleteStory(id: string) {
    this.engagement.addEventForLoggedInUser(EventType["DELETE-STORY"], { _id: id, });
    this.recordingService.deleteStoryRecordingAudio(id).subscribe((_) => {});
    this.recordingService.deleteStoryRecording(id).subscribe((_) => {});
    // update the current story list by removing the deleted story
    this.storyService.deleteStory(id).subscribe((_) => {
      this.stories = this.stories.filter((obj) => obj._id !== id);
    });
  }

  /**
   * Make the div containing the story title editable so the student can
   * rename their story. Autofocus this editable div after making editable
   * @param divId id of the div for the story title
   */
  makeDivEditable(divId) {
    const contentEditableDiv = document.getElementById(divId) as HTMLDivElement;
    contentEditableDiv.setAttribute("contenteditable", "true");
    // auto-focus the div for editing, need to use setTimeout so event is applied
    window.setTimeout(() => contentEditableDiv.focus(), 0);
  }

  /**
   * Remove the editable attribute from the div containing the story title
   * Save the updated title for the story if changes were made
   * @param divId id of the div for the story title
   */
  saveStoryTitle(divId, selectedStory) {
    const contentEditableDiv = document.getElementById(divId) as HTMLDivElement;
    contentEditableDiv.setAttribute("contenteditable", "false");
    // only update the title if changes have been made
    if (selectedStory.title.trim() != contentEditableDiv.textContent.trim()) {
      selectedStory.title = contentEditableDiv.textContent;
      this.storyService.updateTitle(selectedStory._id, selectedStory.title.trim())
        .subscribe({
          next: () => { console.log("title updated"); },
          error: () => console.log("error updating title"),
        });
    }
  }
}
