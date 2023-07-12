import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, } from "@angular/core";
import { TranslationService } from "app/core/services/translation.service";
import { FeedbackComment } from "app/core/models/feedbackComment";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { RecordAudioService } from "app/core/services/record-audio.service";
import { FeedbackCommentService } from "app/core/services/feedback-comment.service";

@Component({
  selector: "app-feedback-comment",
  templateUrl: "./feedback-comment.component.html",
  styleUrls: ["./feedback-comment.component.scss"],
})
export class FeedbackCommentComponent implements OnInit, AfterViewInit {
  @Input("comment") comment: FeedbackComment;
  @Output() deleteEmitter = new EventEmitter();

  @ViewChild("commentTextArea", { static: false }) commentTextArea: ElementRef;

  isEditing = true;
  audioSource: SafeUrl;
  isRecording: boolean = false;

  constructor(
    public ts: TranslationService,
    protected sanitizer: DomSanitizer,
    private recordAudioService: RecordAudioService,
    private feedbackCommentService: FeedbackCommentService
  ) {}

  ngOnInit(): void {}

  /**
   * Focus the text editor if new comment
   */
  ngAfterViewInit(): void {
    if (!this.comment.text && !this.comment.audioId) {
      this.isEditing = true;
      this.commentTextArea.nativeElement.focus();
    } else {
      this.isEditing = false;
    }
  }

  /**
   * Enable editing and set cursor focus
   */
  editComment() {
    this.isEditing = true;
    this.commentTextArea.nativeElement.focus();
  }

  /**
   * Send edited comment changes to the parent component
   * if comment has text
   */
  saveComment() {
    if ( this.comment.text || this.audioSource ) {
      this.isEditing = false;
      this.feedbackCommentService.updateFeedbackComment(this.comment).subscribe({
          next: () => {
            this.adjustTextAreaHeight();
          },
        });
    } else {
      this.deleteComment();
    }
  }

  /**
   * Set textarea height depending on text length, with max height of 100px
   */
  adjustTextAreaHeight() {
    if (this.commentTextArea.nativeElement.scrollHeight < 100) {
      this.commentTextArea.nativeElement.style.height = "auto";
      this.commentTextArea.nativeElement.style.height = `${this.commentTextArea.nativeElement.scrollHeight}px`;
    } else {
      this.commentTextArea.nativeElement.style.height = "100px";
    }
  }

  /**
   * Send delete event to the parent component
   */
  deleteComment() {
    // TODO: delete any feedback audio recordings
    this.feedbackCommentService.deleteFeedbackComment(this.comment._id).subscribe({
      next: () => {
        this.deleteEmitter.next(null);
      },
      error: () => {
        console.log("Error deleting comment")
      }
    })
  }

  /**
   * Start or stop recording audio
   */
  async recordFeedbackMessage() {
    if (this.isRecording) {
      this.recordAudioService.stopRecording();
      setTimeout(() => {
        this.audioSource = this.recordAudioService.playbackAudio();
        console.log(this.audioSource);
      }, 500);
    } else {
      this.recordAudioService.recordAudio();
      this.isEditing = true;
    }
    this.isRecording = !this.isRecording;
  }
}
