import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import { SynthItem } from "app/synth-item";
import { SynthesisService, Voice } from "app/services/synthesis.service";
import { TranslationService } from "app/translation.service";
import { SynthesisPlayerComponent } from "app/student-components/synthesis-player/synthesis-player.component";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "app/authentication.service";
import { Message } from "app/message";
import { UserService } from "app/user.service";
import { ClassroomService } from "app/classroom.service";
import { MessageService } from "app/message.service";
import { RecordAudioService } from "app/services/record-audio.service";
import { SynthVoiceSelectComponent } from "app/synth-voice-select/synth-voice-select.component";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { firstValueFrom } from "rxjs";

@Component({
  selector: "app-dictogloss",
  templateUrl: "./dictogloss.component.html",
  styleUrls: ["./dictogloss.component.scss"],
})
export class DictoglossComponent implements OnInit {
  // dictogloss variables
  generatedFromMessages: boolean;
  texts: string;
  wrong_words_div: string = "";
  words: string[] = [];
  shownWords: string[] = [];
  wrongWords: string[] = [];
  wordsPunc: string[] = [];
  wordsPuncLower: string[] = [];
  sentences: string[] = [];
  hasText: boolean = false;
  hasIncorrect: boolean = false;
  synthText: string;
  guess: string;
  regex: any = /[^a-zA-Z0-9áÁóÓúÚíÍéÉ:]+/;
  regexg: any = /([^a-zA-Z0-9áÁóÓúÚíÍéÉ:]+)/g;
  showInfo: boolean = false;
  gameInProgress: boolean = false;
  allGuessed: boolean = false;
  guessCheck: boolean = false;
  wrongCount: number = 0;
  rightCount: number = 0;
  isRecording: boolean = false;

  // timer variables
  playWithTimer = false;
  totalTime: number = 0;
  interval: any;

  // synthesis variables
  synthesisPlayer: SynthesisPlayerComponent;
  playbackSpeed: number = 1; //Shoud range from 0.5x to 2x speed incrementing in 0.5.
  @ViewChild("voiceSelect") voiceSelect: ElementRef<SynthVoiceSelectComponent>;
  selected: Voice;
  audio_urls: any;
  showReplay: boolean = false;
  synthItem: SynthItem;
  errorText: boolean;
  synthItems: SynthItem[] = [];

  // user variables
  studentId: string;
  teacherId: string;

  constructor(
    private messageService: MessageService,
    private classroomService: ClassroomService,
    private userService: UserService,
    private auth: AuthenticationService,
    private synth: SynthesisService,
    private router: Router,
    public activatedRoute: ActivatedRoute,
    public ts: TranslationService,
    protected sanitizer: DomSanitizer,
    private recordAudioService: RecordAudioService
  ) {
    // see if dictogloss is generated from messages
    try {
      this.texts = this.router.getCurrentNavigation().extras.state.text; //Doesn't work with full stops.
      console.log("TEXTS: ", this.texts);
      console.log("Generated from message.");
      this.playWithTimer = true;
      this.gameInProgress = true;
      this.generatedFromMessages = true;
    } catch {
      console.log("Not generated from message.");
      this.playWithTimer = false;
      this.gameInProgress = false;
      this.generatedFromMessages = false;
    }
  }

  /**
   * Get user details -> id, role
   * Refresh synthesis voice settings
   * Check if dictogloss is sent from messages
   */
  async ngOnInit() {
    const userDetails = this.auth.getUserDetails();
    if (!userDetails) return;

    if (userDetails.role === "TEACHER") {
      this.teacherId = userDetails._id;
    }
    if (userDetails.role === "STUDENT") {
      this.studentId = userDetails._id;
      this.teacherId = (
        await firstValueFrom(
          this.classroomService.getClassroomOfStudent(this.studentId)
        )
      ).teacherId;
    }
    this.refreshVoice();

    // create a dictogloss from the text sent by teacher
    if (this.texts && this.generatedFromMessages == true) {
      this.loadDictoglossFromMessages();
    }
  }

  /**
   * Refresh the synthetic voice: deletes old audio urls and creates new array
   * @param voice Synthesis voice option
   * @returns
   */
  refreshVoice(voice: Voice = undefined) {
    if (voice) this.selected = voice;
    this.synthItems.forEach((s) => {
      s.audioUrl = undefined;
      s.dispose();
    });
    this.synthItems = [];
    this.collateSynths(this.sentences);
  }

  /**
   * Create an array of synth items, one synth item for each sentence to guess
   * @param sentences Array of sentences to listen to
   */
  collateSynths(sentences: string[]) {
    for (let i = 0; i < sentences.length; i++) {
      this.synthItems.push(this.getSynthItem(sentences[i]));
      this.synthItems[i].text = "Sentence " + (i + 1);
    }
  }

  /**
   * Create a new synth item from a given sentence
   * @param line sentence to synthesise
   * @returns SynthItem
   */
  getSynthItem(line: string) {
    return new SynthItem(line, this.selected, this.synth);
  }

  /**
   * Generate the dictogloss text from teacher message
   */
  loadDictoglossFromMessages() {
    this.resetTimer();
    this.startTimer();
    this.allGuessed = false;

    let isValid = false;
    for (let i = 0; i < this.texts.length; i++) {
      if (this.texts[i] !== " ") {
        isValid = true;
        break;
      }
    }

    if (this.texts.length > 0 && isValid) {
      this.hasText = true;
      this.errorText = false;
    } else {
      this.hasText = false;
      this.errorText = true;
    }

    console.log("The input text is:", this.texts);
    this.displayText();
  }

  /**
   * Generate the dictogloss text from student input
   */
  loadDictogloss() {
    this.generatedFromMessages = false;
    console.log("Not generated from message.");
    this.resetTimer();
    this.startTimer();
    this.allGuessed = false;
    let selector = document.getElementById("textSelector") as HTMLInputElement;
    this.texts = selector.value;
    selector.value = "";
    if (this.texts != "") {
      this.gameInProgress = true;
    }

    // check to see if the word starts with any spaces
    let isValid = false;
    for (let i = 0; i < this.texts.length; i++) {
      if (this.texts[i] !== " ") {
        isValid = true;
        break;
      }
    }

    if (this.texts.length > 0 && isValid) {
      this.hasText = true;
      this.errorText = false;
    } else {
      this.hasText = false;
      this.errorText = true;
    }
    this.displayText();
  }

  /**
   * Activate or deactivate timer
   */
  toggleTimer() {
    this.playWithTimer = !this.playWithTimer;
  }

  /**
   * Increase or decrease synthesis speed
   * @param increment selected voice speed level
   */
  changeSpeed(increment: number) {
    if (increment > 0 && this.playbackSpeed < 2) {
      this.playbackSpeed += 0.5;
    }
    if (increment < 0 && this.playbackSpeed > 0.5) {
      this.playbackSpeed -= 0.5;
    }
  }

  /**
   * Fades in/out the instructions box (buggy)
   */
  fadeOutAnimation() {
    document.getElementById("infoButtonClose").hidden = true;
    document.getElementById("infoBox").className = "fadeOutContainer";
    setTimeout(() => {
      this.showInfo = false;
    }, 1000); //Avoids premature animation ending.
  }

  /**
   * Set the css class of the instructions box when it is clicked on
   */
  setClass() {
    document.getElementById("infoBox").className = "container";
    document.getElementById("infoButtonClose").hidden = false;
  }

  /**
   * Send a message to the teacher with the student's stats
   */
  sendDictoglossReport() {
    let message: Message = {
      _id: "", //Check these
      id: "",
      subject:
        '"' + this.auth.getUserDetails().username + '" Finished Dictogloss!',
      date: new Date(),
      senderId: this.studentId,
      senderUsername: "", //Teacher Username
      recipientId: this.teacherId, //Teacher Id
      text:
        "The final time was: \t" +
        this.displayTime(this.totalTime) +
        "\n" + //Timer always must be on for a teacher-sent dictogloss.
        "Correct guesses:\t\t" +
        this.rightCount +
        "\n" +
        "Incorrect guesses:\t" +
        this.wrongCount,
      seenByRecipient: false,
      audioId: "",
    };

    this.messageService.saveMessage(message);
  }

  /**
   * Start timer interval using new date
   */
  startTimer() {
    if (this.playWithTimer === false) {
      return;
    }
    let start = Date.now();
    this.interval = setInterval(() => {
      //var change;
      let change = Date.now() - start;
      this.totalTime = Math.floor(change / 1000);
    }, 1000);
  }

  /**
   * Clear timer interval if timer is running
   */
  pauseTimer() {
    if (this.playWithTimer === false) {
      return;
    }
    clearInterval(this.interval);
  }

  /**
   * Clear timer interval and reset total time
   */
  resetTimer() {
    if (this.playWithTimer === false) {
      return;
    }
    this.totalTime = 0;
    clearInterval(this.interval);
  }

  /**
   * Display total time as a string in minutes and seconds
   * @param totalTime total time (in seconds)
   * @returns String showing total time
   */
  displayTime(totalTime: number): string {
    let time: string;
    time =
      Math.floor(totalTime / 60).toString() +
      " minutes " +
      Math.floor(totalTime % 60).toString() +
      " seconds";
    return time;
  }

  /**
   *
   */
  displayText() {
    //global lists of words
    this.words = [];
    this.shownWords = [];
    this.wrongWords = [];
    this.wordsPunc = [];
    this.wordsPuncLower = [];
    this.synthItems = [];
    this.synthText = "";
    this.wrong_words_div = "";
    this.rightCount = 0;
    this.wrongCount = 0;

    // pre-process the text and split into words
    this.words = this.texts.split(this.regex);
    this.wordsPuncLower = this.texts.toLowerCase().split(this.regexg);
    this.wordsPunc = this.texts.split(this.regexg);
    this.sentences = this.texts.split(".");
    this.texts = "";

    // Adds spaces between words
    for (let i = 0; i < this.wordsPunc.length; i++) {
      console.log(this.wordsPunc[i]);
      // if word is empty
      if (this.wordsPunc[i] === "") {
        this.wordsPunc.splice(i, 1);
        if (i > 0) {
          i--;
        }
      } else {
        // if word is a punctuation mark
        if (this.regex.test(this.wordsPunc[i])) {
          this.shownWords.push(this.wordsPunc[i]); //For every punctuation mark, add it to the list of shown words(purely for comparing arrays)
        }
        // normal word
        else {
          let dashes = "";
          for (let j = 0; j < this.wordsPunc[i].length; j++) {
            dashes += "-"; //For every character, adds a dash.
          }
          this.shownWords.push(dashes); //For every word add the dashes.
        }
      }
    }

    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i] === "") {
        this.words.splice(i, 1);
        if (i > 0) {
          i--;
        }
      }
    }

    //Gets rid of first character space that breaks program
    if (this.words[0] == " ") {
      this.words.splice(0, 1);
    }

    if (this.wordsPunc[0] == " ") {
      this.wordsPunc.splice(0, 1);
    }

    // create a string from the words to use for synthesis
    for (let i = 0; i < this.words.length; i++) {
      this.synthText += this.words[i] + " ";
    }

    // create synthesis if text sent by teacher
    if (this.hasText) {
      this.collateSynths(this.sentences);
    }

    console.log("WORDS: ", this.words);
    console.log("PUNCTUATED WORDS LOWER: ", this.wordsPuncLower);
    console.log("PUNCTUATED WORDS: ", this.wordsPunc);
    console.log("SENTENCES: ", this.sentences);
    console.log("SHOWN WORDS: ", this.shownWords);
  }

  /**
   * Show the first character of a hidden word
   * @param index index of word in the sentence
   */
  firstChar(index: number) {
    if (this.shownWords[index] !== this.wordsPunc[index]) {
      this.shownWords[index] =
        this.wordsPunc[index].slice(0, 1) + this.shownWords[index].slice(1);
    }
  }

  /**
   * For if there is a single letter word that is pressed last.
   */
  generalCheck() {
    this.guessCheck = true;
    for (let i = 0; i < this.wordsPunc.length; i++) {
      if (this.wordsPunc[i] !== this.shownWords[i]) {
        this.guessCheck = false;
        break;
      }
    }
    if (this.guessCheck) {
      this.pauseTimer();
      this.allGuessed = true;
      this.gameInProgress = false;
      if (this.generatedFromMessages) {
        this.sendDictoglossReport();
      }
      this.generatedFromMessages = false;
    }
  }

  /**
   * Checks if a word contains any punctuation
   * @param i word from sentences to guess
   * @returns boolean if word contains punctuation
   */
  isNotPunctuated(i: string) {
    if (this.regex.test(i)) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Preprocess word to then check if correct guess
   */
  async delimitPotentialWords() {
    //Word input field
    var word_input = document.getElementById(
      "guesses_input"
    ) as HTMLInputElement;
    let wordList = word_input.value.split(this.regex);

    for (let i = 0; i < wordList.length; i++) {
      if (wordList[i] === "") {
        wordList.splice(i, 1);
        if (i > 0) {
          i--;
        }
      }
    }

    //Gets rid of first character space that breaks program
    if (wordList[0] == " ") {
      wordList.splice(0, 1);
    }

    console.log(wordList);

    //For multiple words entered at once
    for (let word = 0; word < wordList.length; word++) {
      console.log(wordList[word]);
      this.checkWord(wordList[word]);
    }
    word_input.value = "";
  }

  /**
   * Check if word is valid guess?
   * @param word word from wordlist
   */
  checkWord(word: string) {
    let isIn = this.wordsPuncLower.indexOf(word.toLowerCase()) != -1;
    let index = this.wordsPuncLower.indexOf(word.toLowerCase());
    if (!isIn) {
      this.wrongCount++;
    } else if (isIn && this.shownWords[index] != this.wordsPunc[index]) {
      this.rightCount++;
    }
    if (!isIn && !this.wrongWords.includes(word)) {
      //If the typed word is not in the words list
      //If wrong words list is empty, add word with no comma, else add it with comma in front of word
      this.hasIncorrect = true;
      if (this.wrong_words_div.length !== 0) {
        this.wrong_words_div += ", " + word;
      } else {
        this.wrong_words_div += word;
      }
      this.wrongWords.push(word);
    } else {
      //If the word is found, loop through the list and show the word in the right position
      var start_index = 0;
      while (
        this.wordsPuncLower.indexOf(word.toLowerCase(), start_index) !== -1
      ) {
        let word_index = this.wordsPuncLower.indexOf(
          word.toLowerCase(),
          start_index
        );
        this.shownWords[word_index] = this.wordsPunc[word_index];
        start_index = word_index + 1;
      }
    }

    this.guessCheck = true;
    for (let i = 0; i < this.wordsPunc.length; i++) {
      if (this.wordsPunc[i] !== this.shownWords[i]) {
        this.guessCheck = false;
        break;
      }
    }
    if (this.guessCheck) {
      this.pauseTimer();
      this.allGuessed = true;
      this.gameInProgress = false;
      if (this.generatedFromMessages) {
        this.sendDictoglossReport();
      }
      this.generatedFromMessages = false;
    }
  }

  /* Stop recording if already recording, otherwise start recording */
  async speakAnswer() {
    if (this.isRecording) {
      this.recordAudioService.stopRecording();
      let transcription = await this.recordAudioService.getAudioTranscription();
      console.log(transcription);
      if (transcription) {
        let guess_input = document.getElementById(
          "guesses_input"
        ) as HTMLInputElement;
        guess_input.value = transcription;
      }
    } else {
      this.recordAudioService.recordAudio();
    }
    this.isRecording = !this.isRecording;
  }
}
