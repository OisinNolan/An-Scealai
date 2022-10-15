import { Component, OnInit } from '@angular/core';
import { SynthItem } from 'app/synth-item';
import { SynthesisService, Voice, voices } from 'app/services/synthesis.service';
import { TranslationService } from 'app/translation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { SynthesisPlayerComponent } from 'app/student-components/synthesis-player/synthesis-player.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'app/authentication.service';
import { Message } from 'app/message';
import { UserService } from 'app/user.service';
import { ClassroomService } from 'app/classroom.service';
import { Classroom } from 'app/classroom';
import { MessageService } from 'app/message.service';

@Component({
  selector: 'app-dictgloss',
  templateUrl: './dictgloss.component.html',
  styleUrls: ['./dictgloss.component.scss']
})

export class DictglossComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private classroomService: ClassroomService,
    private userService: UserService,
    private auth: AuthenticationService,
    private synth: SynthesisService,
    private router: Router,
    public activatedRoute: ActivatedRoute,
    public ts: TranslationService,
  ) { 
    this.dictglossCreateForm(); 
    try {
      this.texts = this.router.getCurrentNavigation().extras.state.text;
      this.dictglossFromMessages(this.texts);
      console.log("Generated from message.")
      this.generatedFromMessages = true;
    } catch {
      console.log("Not generated from message.")
      this.generatedFromMessages = false;
    }
  } 

  generatedFromMessages: boolean;

  isTeacher: boolean;
  teacherName: string;
  teacherId: string;

  isStudent: boolean;
  studentId: string;
  classroom: any;
  ngOnInit(): void {
    const userDetails = this.auth.getUserDetails();
    
    // Return if user not logged in to avoid calling null.role (which results in error)
    if (!userDetails) return;

    if(userDetails.role === "TEACHER") {
      this.isTeacher = true;
      this.teacherId = this.auth.getUserDetails()._id;
    }
    if(userDetails.role === "STUDENT") {
      this.studentId = this.auth.getUserDetails()._id;
      this.classroomService.getClassroomOfStudent(this.studentId).subscribe((res: Classroom) => {
        this.classroom = res;
        this.teacherId = this.classroom.teacherId;
        this.userService.getUserById(this.teacherId).subscribe( (res) => {
          this.teacherName = res.username;
        });
      });
      this.isStudent = true;
    }
  }

  init() {
    //If the page is loaded with a 'text' as url parameter, load that text instead of using the ones listed here
    //Example: dictgloss.html?text={"name":"urltest","txt":"test/story.txt","wavs":["test/audio/wav/paragraph_1.wav","test/audio/wav/paragraph_2.wav"]}
    if (location.search !== "") {
      console.log("Loading text from location.search: " + location.search);

      var sp = new URLSearchParams(location.search)
      var text = JSON.parse(sp.get("text"))
      console.log(text);
      console.log("text.name: " + text.name);
    } else {
      console.log("Loading texts from " + this.texts);
    }
  }

  //I recognise that using parallel arrays wasn't the most intuitive move - Fionn
  texts: string;
  synthForm: FormGroup;
  wrong_words_div: string = '';
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
  regex: any = /[^a-zA-Z0-9áÁóÓúÚíÍéÉ]+/;
  regexg: any = /([^a-zA-Z0-9áÁóÓúÚíÍéÉ]+)/g;
  showInfo: boolean = false;

  sendDictglossReport(){
    if(this.isStudent){
      let message: Message = {
        _id: "", //Check these
        id: "",
        subject: "Student Finished Dictogloss!",
        date: new Date,
        senderId: "",
        senderUsername: "", //Teacher Username
        recipientId: "", //Teacher Id
        text: 
        "The final time was: \t" + this.displayTime(this.totalTime) + "\n" + 
        "Correct guesses:\t\t" + this.rightCount + "\n" +
        "Incorrect guesses:\t" + this.wrongCount,
        seenByRecipient: false,
        audioId: "",
      }

      message.senderId = this.studentId;
      message.recipientId = this.teacherId;
      this.messageService.saveMessage(message);
    }
  }

  dictglossCreateForm(){
    this.synthForm = this.fb.group({
      dialect: ['connemara']
    });
  }

  totalTime: number = 0;
  interval: any;
  startTimer(){
    this.interval = setInterval(() => {
      this.totalTime++;
    },1000)
  }

  pauseTimer(){
    clearInterval(this.interval);
  }

  resetTimer(){
    this.totalTime = 0;
  }

  displayTime(totalTime: number): string{
    let time: string;
    time = Math.floor(totalTime / 60).toString() + ":" + (totalTime % 60).toString();
    return time;
  }

  displayText(text) {
    console.log("displayText: " + text);
    
    //global lists of words
    this.words = [];
    this.shownWords = [];
    this.wrongWords = [];
    this.wordsPunc = [];
    this.wordsPuncLower = [];
    this.synthText = '';
    this.wrong_words_div = "";
    this.rightCount = 0;
    this.wrongCount = 0;
    
    this.words = text.split(this.regex);
    this.wordsPuncLower = text.toLowerCase().split(this.regexg);
    this.wordsPunc = text.split(this.regexg);
    this.sentences = text.split('.');
    this.texts = '';

    //Gets rid of multiple spaces
    for(let i = 0 ; i < this.wordsPunc.length; i++){
      if(this.wordsPunc[i] === ''){
        this.wordsPunc.splice(i, 1);
        if(i > 0){
          i--;
        }
      } else {
        if(this.regex.test(this.wordsPunc[i])){
          this.shownWords.push(this.wordsPunc[i]); //For every punctuation mark, add it to the list of shown words(purely for comparing arrays)
        } else {
          let dashes = "";
          for(let j = 0; j < this.wordsPunc[i].length; j++){
            dashes += '-';  //For every character, adds a dash.
          }
          this.shownWords.push(dashes); //For every word add the dashes.
        }
      }
    }

    for(let i = 0 ; i < this.words.length; i++){
      if(this.words[i] === ''){
        this.words.splice(i, 1);
        if(i > 0){
          i--;
        }
      }
    }

    //Gets rid of first character space that breaks program
    if(this.words[0] == " "){
      this.words.splice(0, 1);
    }
    
    if(this.wordsPunc[0] == " "){
      this.wordsPunc.splice(0, 1);
    }

    for(let i = 0; i < this.words.length; i++){
      this.synthText += this.words[i] + " ";
    }

    console.log('This is the synth input', this.synthText);
    if(this.hasText){
      //this.dictglossSynthRefresh();
      this.collateSynths(this.sentences);
    }
    
    console.log("WORDS: ", this.words);
    console.log("PUNCTUATED WORDS: ", this.wordsPunc);
    console.log("SHOWN WORDS: ", this.shownWords);
    
    
  }

  firstChar(index: number) {
    if(this.shownWords[index] !== this.wordsPunc[index]){
      this.shownWords[index] = this.wordsPunc[index].slice(0, 1) + this.shownWords[index].slice(1);
    }
  }

  audio_urls: any;
  showReplay: boolean = false;
  synthItem: SynthItem;
  errorText: boolean;
  dictglossLoad() {
    this.generatedFromMessages = false;
    this.resetTimer();
    this.startTimer();
    this.allGuessed = false;
    var selector = document.getElementById("textSelector") as HTMLInputElement;
    this.texts = selector.value;

    let isValid = false;
    for(let i = 0; i < this.texts.length; i++){
      if(this.texts[i] !== " "){
        isValid = true;
        break;
      }
    }

    if(this.texts.length > 0 && isValid){
      this.hasText = true;
      this.errorText = false;
    } else {
      this.hasText = false;
      this.errorText = true;
    }

    console.log(this.texts.length, this.hasText);
    

    console.log('The input text is:', this.texts);
    this.displayText(this.texts);
    selector.value = "";
  }

  dictglossFromMessages(text: string) {
    this.resetTimer();
    this.startTimer();
    this.allGuessed = false;
    this.texts = text;

    let isValid = false;
    for(let i = 0; i < this.texts.length; i++){
      if(this.texts[i] !== " "){
        isValid = true;
        break;
      }
    }

    if(this.texts.length > 0 && isValid){
      this.hasText = true;
      this.errorText = false;
    } else {
      this.hasText = false;
      this.errorText = true;
    }

    console.log(this.texts.length, this.hasText);
    

    console.log('The input text is:', this.texts);
    this.displayText(this.texts);
  }
  
  selected: Voice = voices[0];
  synthItems: SynthItem[] = [];
  collateSynths(sentences: string[]){
    // if(this.synthItems.length === 0){
      for(let i = 0; i < sentences.length; i++){
        this.synthItems.push(this.getSynthItem(sentences[i]));
        console.log(this.synthItems[i]);
      }
      console.log(this.synthItems);
      
    // }
  }

  // refresh(voice: Voice = undefined) {
  //   if(voice) this.selected = voice;
  //   this.synthItems.map(s => {
  //     s.audioUrl = undefined;
  //     s.dispose();
  //   })
  // }

  getSynthItem(line: string) {
    return new SynthItem(line,this.selected,this.synth);
  }

  dictglossSynthRefresh() {
    if (this.synthItem?.dispose instanceof Function) this.synthItem.dispose();
    //this.synthItem.voice = this.synth.api2_voice_from_dialect('connemara');
    //this.synthItem = new SynthItem(this.synthText, this.voices[1], this.synth);
    this.synthItem.text = "Play Text";  //Makes the text in the synth item not visible
    console.log("REQUEST URL:",this.synthItem.requestUrl);
  }

  isNotPunctuated(i: string) {
    if(this.regex.test(i)){
      return false;
    } else {
      return true;
    }
  }

  allGuessed: boolean = false;
  guessCheck: boolean = false;
  async delimitPotentialWords(){
    //Word input field
    var word_input = document.getElementById("guesses_input") as HTMLInputElement;
    let wordList = word_input.value.split(this.regex);

    for(let i = 0 ; i < wordList.length; i++){
      if(wordList[i] === ''){
        wordList.splice(i, 1);
        if(i > 0){
          i--;
        }
      }
    }

    //Gets rid of first character space that breaks program
    if(wordList[0] == " "){
      wordList.splice(0, 1);
    }

    console.log(wordList);
    
    //For multiple words entered at once
    for(let word = 0; word < wordList.length; word++){
      console.log(wordList[word]);
      this.checkWord(wordList[word]);
    }
    word_input.value = "";
  }

  wrongCount: number = 0;
  rightCount: number = 0;
  checkWord(word: string) {
    let isIn = this.wordsPuncLower.indexOf(word.toLowerCase()) != -1;
    let index = this.wordsPuncLower.indexOf(word.toLowerCase());
    if(!isIn) { 
      this.wrongCount++; 
    } else if (isIn && this.shownWords[index] != this.wordsPunc[index]) {
      this.rightCount++;
    }
    if (!isIn && !this.wrongWords.includes(word)) {
      //If the typed word is not in the words list
      //If wrong words list is empty, add word with no comma, else add it with comma in front of word
      this.hasIncorrect = true;
      if(this.wrong_words_div.length !== 0){
        this.wrong_words_div += ", " + word;
      } else {
        this.wrong_words_div += word;
      }
      this.wrongWords.push(word);
    } else {
      //If the word is found, loop through the list and show the word in the right position
      var start_index = 0;
      while (this.wordsPuncLower.indexOf(word.toLowerCase(), start_index) !== -1) {
        let word_index = this.wordsPuncLower.indexOf(word.toLowerCase(), start_index);
        this.shownWords[word_index] = this.wordsPunc[word_index];
        start_index = word_index + 1;
      }
    }

    this.guessCheck = true;
    for(let i = 0; i < this.wordsPunc.length; i++){
      if(this.wordsPunc[i] !== this.shownWords[i]){
        this.guessCheck = false;
        break;
      }
    }
    if(this.guessCheck){
      this.pauseTimer();
      this.allGuessed = true;
      if(this.generatedFromMessages){ this.sendDictglossReport(); }
      this.generatedFromMessages = false;
    }
  }

  //For if there is a single letter word that is pressed last.
  generalCheck(){
    this.guessCheck = true;
    for(let i = 0; i < this.wordsPunc.length; i++){
      if(this.wordsPunc[i] !== this.shownWords[i]){
        this.guessCheck = false;
        break;
      }
    }
    if(this.guessCheck){
      this.pauseTimer();
      this.allGuessed = true;
      if(this.generatedFromMessages){ this.sendDictglossReport(); }
      this.generatedFromMessages = false;
    }
  }
}