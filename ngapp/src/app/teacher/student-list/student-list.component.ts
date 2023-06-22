import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from "@angular/core";
import { Classroom } from "../../core/models/classroom";
import { User } from "../../core/models/user";
import { Story } from "../../core/models/story";
import { UserService } from "../../core/services/user.service";
import { StoryService } from "app/core/services/story.service";
import { firstValueFrom } from "rxjs";
import { MatDrawer } from "@angular/material/sidenav";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.scss"],
})
export class StudentListComponent implements OnInit {
  @Input() classroom: Classroom;
  @Output() storyEmitter = new EventEmitter<Story>();
  students: User[] = [];
  studentStories: Object = {};
  storyForFeedback: Story;
  lastClickedStoryId: string = "";
  @ViewChild("rightDrawer") rightDrawer: MatDrawer;

  constructor(
    private userService: UserService,
    private storyService: StoryService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(_) {
    this.getStudents();
  }

  /*
   * Loop through student ids in classroom object to get student objects
   */
  async getStudents() {
    this.students = [];
    for (let id of this.classroom.studentIds) {
      this.userService.getUserById(id).subscribe({
        next: async (student) => {
          this.students.push(student);
          let stories = await firstValueFrom(
            this.storyService.getStoriesForClassroom(
              student._id,
              this.classroom.date?.toString()
            )
          );
          stories.sort((a, b) => (a.lastUpdated > b.lastUpdated ? -1 : 1));
          if (stories) {
            this.studentStories[student.username] = stories;
          } else {
            this.studentStories[student.username] = [];
          }
        },
        error: () => {
          console.log(id + " does not exist");
        },
      });
    }
  }

  /**
   * Set the story to be used for giving feedback
   * @param story 
   */
  setStoryForFeedback(story: Story) {
    this.storyEmitter.emit(story);
    this.storyForFeedback = story;
    // set css for selecting a classroom in the side nav
    let id = story._id;
    let classroomElement = document.getElementById(id);

    if (classroomElement) {
      // remove css highlighting for currently highlighted classroom
      if (this.lastClickedStoryId && document.getElementById(this.lastClickedStoryId)) {
        document.getElementById(this.lastClickedStoryId).classList.remove("clickedresultCard");
      }
      this.lastClickedStoryId = id;
      // add css highlighting to the newly clicked classroom
      classroomElement.classList.add("clickedresultCard");
    }
  }

  /**
   * Remove any highlighted story previously selected for feedback
   * Close the feedback drawer if opened
   */
  resetFeedbackDrawer() {
    // remove css highlighting for currently highlighted classroom
    if (this.lastClickedStoryId && document.getElementById(this.lastClickedStoryId)) {
      document.getElementById(this.lastClickedStoryId).classList.remove("clickedresultCard");
    }
    if (this.rightDrawer.opened) this.rightDrawer.close();
  }
}
