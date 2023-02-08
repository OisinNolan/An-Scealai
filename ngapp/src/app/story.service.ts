import { Injectable } from '@angular/core';
import { Story } from './story';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//import { DefaultIterableDifferFactory } from '@angular/core/src/change_detection/change_detection';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from './authentication.service';
import { Observable, throwError } from 'rxjs';
// import { EmptyObservable } from 'rxjs/observable/EmptyObservable';
import { EngagementService } from './engagement.service';
import { EventType } from './event';
import { TranslationService } from './translation.service';
import config from 'abairconfig';


@Injectable({
  providedIn: 'root'
})
export class StoryService {

  chosenStory: Story;

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthenticationService,
    private engagement: EngagementService,
    private ts: TranslationService,
  ) { }

  baseUrl: string = config.baseurl + 'story/';

  saveStory(studentId, title, date, dialect, text, author) {
    const storyObj = {
      title: title,
      date: date,
      dialect: dialect,
      text: text,
      htmlText: text,
      author: author,
      studentId: studentId,
      lastUpdated: new Date(),
      activeRecording: null
    };
    this.http.post<{id: string}>(this.baseUrl + 'create', storyObj)
      .subscribe(res => {
        this.engagement.addEventForLoggedInUser(EventType['CREATE-STORY'], storyObj);
        // this.engagement.addEventForLoggedInUser(EventType["RECORD-STORY"], storyObj);

        this.router.navigateByUrl('/dashboard/' + res.id);
      });
  }

  getStoriesFor(author : string) {
    return this.http.get(this.baseUrl + author);
  }

  getStoriesByOwner(owner: string) : Observable<Story[]>  {
    return this.http.get<Story[]>(this.baseUrl + 'owner/' + owner);
  }

  getStory(id: string) : Observable<any> {
    return this.http.get(this.baseUrl + 'withId/' + id);
  }
  
  getStoriesByDate(studentId:string, startDate:string, endDate:string) : Observable<any> {
    return this.http.post(this.baseUrl + "getStoriesByDate/" + studentId, {startDate:startDate, endDate:endDate});
  }

  getStoriesForLoggedInUser(): Observable<Story[]> {
    const userDetails = this.auth.getUserDetails();
    if(!userDetails) {
      return new Observable(subscriber=>{
        subscriber.next([]);
        subscriber.complete();
      });
    }
    return this.getStoriesByOwner(userDetails._id);
  }

  updateStoryTitleAndDialect(story: Story): Observable<any> {
    return this.http.post(this.baseUrl + 'update/' + story._id, story);
  }
  
  getStoriesForClassroom(owner: string, date): Observable<any> {
    return this.http.get(this.baseUrl + "getStoriesForClassroom/" + owner + "/" + date);
  }

  updateStory(updateData: any, id: string): Observable<any> {
    return this.http.post(
      this.baseUrl + 'update/' + id,
      updateData);
  }

  deleteStory(id) {
    return this.http.get(this.baseUrl + 'delete/' + id);
  }
  
  deleteAllStories(id) {
    return this.http.get(this.baseUrl + 'deleteAllStories/' + id);
  }

  addFeedback(id, feedbackText: string) : Observable<any> {
    return this.http.post(this.baseUrl + "addFeedback/" + id, {feedback : feedbackText});
  }

  getFeedback(id) : Observable<any> {
    return this.http.get(this.baseUrl + "feedback/" + id);
  }

  viewFeedback(id) : Observable<any> {
    return this.http.post(this.baseUrl + "viewFeedback/" + id, {});
  }

  getFeedbackAudio(id) : Observable<any> {
    return this.http.get(this.baseUrl + "feedbackAudio/" + id, {responseType: "blob"});
  }

  addFeedbackAudio(id, audioBlob: Blob) : Observable<any>{
    let formData = new FormData();
    formData.append('audio', audioBlob);
    return this.http.post(this.baseUrl + "addFeedbackAudio/" + id, formData);
  }

  synthesise(id: string): Observable<any> {
    return this.http.get(this.baseUrl + 'synthesise/' + id);
  }

  synthesiseObject(storyObject: Story): Observable<any> {
    return this.http.post(this.baseUrl + 'synthesiseObject/', {story: storyObject});
  }

  updateActiveRecording(storyId: string, recordingId: string): Observable<any> {
    return this.http.post(this.baseUrl + 'updateActiveRecording/' + storyId + '/', {activeRecording: recordingId});
  }
  
  averageWordCount(studentId:string, startDate:string, endDate:string) : Observable<any> {
    return this.http.post(this.baseUrl + "averageWordCount/" + studentId, {startDate:startDate, endDate:endDate});
  }
  
  countGrammarErrors(studentId:string) : Observable<any> {
    return this.http.get(this.baseUrl + "countGrammarErrors/" + studentId);
  }

  getStoryStats() : Observable<any> {
    return this.http.get(this.baseUrl + "getStoryStats/allDB");
  }
}
