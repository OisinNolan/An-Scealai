import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { User } from './user';
import { Observable, of } from 'rxjs';
import { User } from '../models/user'
import config from 'abairconfig';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = config.baseurl + 'user/';

  constructor(private http: HttpClient) { }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'getUserById/' + id);
  }

  getUserByUsername(username: string): Observable<any> {
    return this.http.get(this.baseUrl + 'getUserByUsername/' + username);
  }

  searchUser(searchString: string, pageNumber: number, limit: number, roles: string[]): Observable<any> {
    return this.http.post(
      this.baseUrl + `searchUser/`,
      {
        searchString: searchString,
        limit: limit,
        currentPage: pageNumber,
        roles: roles
      }
    );
  }

  getUserCount(): Observable<any> {
    return this.http.get(this.baseUrl + 'count/');
  }

  getUserCountAndStatus(): Observable<any> {
    return this.http.get(this.baseUrl + 'countAndStatus/');
  }

  countUsersWithStories(): Observable<any> {
    return this.http.get(this.baseUrl + 'countUsersWithStories/');
  }

  countTeachersWithClassrooms(): Observable<any> {
    return this.http.get(this.baseUrl + 'countTeachersWithClassrooms/');
  }

  getLanguageCount(): Observable<any> {
    return this.http.get(this.baseUrl + 'getLanguageCount/');
  }

  deleteUser(id: string): Observable<any> {
    console.log("delete acount for ", id)
    return this.http.get(this.baseUrl + 'deleteUser/' + id);
  }

  updateUsername(id: string, newUsername: string): Observable<any> {
    return this.http.post(this.baseUrl + 'updateUsername/' + id, { newUsername: newUsername });
  }

  updatePassword(id: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl + 'updatePassword/' + id, { password });
  }
}
