import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { Observable } from 'rxjs';
import { EngagementService } from 'app/core/services/engagement.service';
import { EventType } from '../../core/models/event';
import { TranslationService } from 'app/core/services/translation.service';
import { Message } from '../../core/models/message';
import config from 'abairconfig';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient, private router: Router,
    private auth: AuthenticationService, private engagement: EngagementService,
    private ts : TranslationService) { }
  
  baseUrl: string = config.baseurl + "messages/";

  /*
  * save a new message to the database
  */
  saveMessage(message: Partial<Message>, recipientId: string): Observable<any> {
    const messageObj = {
      date: message.date,
      subject: message.subject,
      senderId: message.senderId,
      senderUsername: message.senderUsername,
      recipientId: recipientId,
      text: message.text,
      seenByRecipient: message.seenByRecipient,
    };
    
    this.engagement.addEvent(EventType["CREATE-MESSAGE"], {messageObject: messageObj});
    return this.http.post(this.baseUrl + "create", messageObj);
  }
  
  // Return messages from the database for the logged in user
  getMessagesForLoggedInUser(): Observable<any>  {
    const user = this.auth.getUserDetails();
    if (!user) throw new Error('Cannot add event if user is not logged in');
    let id = user._id;
    return this.http.get(this.baseUrl + 'viewMessges/' + id);
  }
  
  /*
  * Return a message given the 'id' attribute
  */
  getMessageById(id: string) : Observable<any> {
    return this.http.get(this.baseUrl + 'getMessageById/' + id);
  }
  
  /*
  * Given a message id, change the seenByRecipient value of the message to true
  */
  markAsOpened(id: string): Observable<any> {
    return this.http.post(this.baseUrl + "markAsOpened/" + id, {});
  }
  
  /*
  * Delete message from the database
  */
  deleteMessage(id: string) : Observable<any> {
    return this.http.get(this.baseUrl + 'delete/' + id);
  }
  
  /*
  * Return the number of messages that have not yet been read
  */
  getNumberOfUnreadMessages(messages: Message[]): number {
    return messages.filter(message => !message.seenByRecipient).length
  }
  
  /*
  * Return the number of messages that have not yet been read for a given class
  */
  getNumberOfUnreadMessagesForClass(messages: Message[], studentIds: String[]): number {
    let sum: number = 0;
    let filteredMessages: Message[] = [];
    for(let s of studentIds) {
      for(let m of messages) {
        if(s === m.senderId) {
          filteredMessages.push(m);  
        }
      }
    }
    for(let m of filteredMessages) {
      if(!m.seenByRecipient) {
        sum++;
      }
    }
    return sum;
  }

  /*
  * Get audio file from DB for assoiaated message
  */
  getMessageAudio(id: string) : Observable<any> {
    return this.http.get(this.baseUrl + "messageAudio/" + id, {responseType: "blob"});
  }

  /*
  * Add an audio file to the DB for associated message
  */
  addMessageAudio(id: string, audioBlob: Blob) : Observable<any> {
    let formData = new FormData();
    formData.append('audio', audioBlob);
    return this.http.post(this.baseUrl + "addMessageAudio/" + id, formData);
  }
  
  /*
  * Delete all messages for given recipient id
  */  
  deleteAllMessages(userId: string): Observable<any> {
    return this.http.get(this.baseUrl + 'deleteAllMessages/' + userId);
  }

  /*
  * Delete audio file associated with message
  */  
  deleteMessageAudio(id: string): Observable<any> {
    return this.http.get(this.baseUrl + 'deleteMessageAudio/' + id);
  }
  
  /*
  * Update the sender username for a given account
  */ 
  updateSenderUsername(id: string, username: string): Observable<any> {
    return this.http.post(this.baseUrl + 'updateSenderUsername/' +id, {username: username});
  }

}
