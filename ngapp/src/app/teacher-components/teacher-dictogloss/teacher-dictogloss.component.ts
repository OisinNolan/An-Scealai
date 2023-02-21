import { Component, OnInit } from "@angular/core";
import { TranslationService } from "app/translation.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ClassroomService } from "app/classroom.service";
import { Classroom } from "../../classroom";
import { MessageService } from "app/message.service";
import { UserService } from "app/user.service";
import { User } from "app/user";
import { AuthenticationService } from "app/authentication.service";
import { Message } from "app/message";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { firstValueFrom } from "rxjs";

@Component({
  selector: "app-teacher-dictogloss",
  templateUrl: "./teacher-dictogloss.component.html",
  styleUrls: ["./teacher-dictogloss.component.scss"],
})
export class TeacherDictoglossComponent implements OnInit {
  constructor(
    public ts: TranslationService,
    private auth: AuthenticationService,
    private classroomService: ClassroomService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.createDictoglosForm();
  }

  students: User[] = [];
  sendTo: string[] = [];
  newDictogloss: FormGroup;
  classroom: Classroom;
  allStudentsSelected: boolean = true;

  async ngOnInit() {
    // get classroom
    this.classroom = await firstValueFrom(
      this.classroomService.getClassroom(this.route.snapshot.params["id"])
    );
    // get list of student users
    for (let id of this.classroom.studentIds) {
      this.students.push(
        await firstValueFrom(this.userService.getUserById(id))
      );
      this.sendTo.push(id);
    }
    console.log(this.students);
  }

  /**
   * Create a form to send text (passage) with the dictogloss
   */
  createDictoglosForm() {
    this.newDictogloss = this.fb.group({
      passage: ["", Validators.required],
    });
  }

  /**
   * Send Dictogloss message to all students on the list
   */
  sendDictogloss() {
    if (
      this.sendTo.length > 0 &&
      this.newDictogloss.controls["passage"].value !== ""
    ) {
      let passage = this.newDictogloss.get("passage").value;

      console.log(passage);
      console.log(this.sendTo);

      let message: Message = {
        _id: "", //Check these
        id: "",
        subject: "New Dictogloss",
        date: new Date(),
        senderId: this.auth.getUserDetails()._id, //Teacher ID
        senderUsername: this.auth.getUserDetails().username, //Teacher Username
        recipientId: "",
        text: passage,
        seenByRecipient: false,
        audioId: "",
      };

      for (let id of this.sendTo) {
        message.recipientId = id;
        this.messageService.saveMessage(message);
      }
      this.goToDashboard();
    }
  }

  /**
   * Select all students or deselect all students
   */
  selectAllStudents() {
    this.allStudentsSelected = !this.allStudentsSelected;
    this.sendTo = [];

    if (this.allStudentsSelected) {
      this.students.forEach((student) => this.sendTo.push(student._id));
    }
    console.log("All students selected/deselected: ", this.sendTo);
  }

  /**
   * Add or remove student ids from the send to list
   * @param id student id
   */
  updateSendList(id: string) {
    if (!this.sendTo.includes(id)) {
      this.sendTo.push(id);
    } else {
      this.sendTo.splice(this.sendTo.indexOf(id), 1);
    }
  }

  goToDashboard() {
    this.router.navigateByUrl("teacher/dashboard");
  }
}