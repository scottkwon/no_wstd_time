import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  serviceLogin(user)  {
  	return this._http.post('/api/login', user)
  		.map( (response) => response.json())
  		.toPromise()
  }

  serviceRegister(user) {
  	return this._http.post('/api/register', user)
  		.map( (response) => response.json())
  		.toPromise()
  }

  serviceCheckSessionUser() {
  	return this._http.get('/api/user')
  		.map( (response) => response.json())
  		.toPromise()
  }

  serviceLogout() {
  	return this._http.get('/api/logout')
  		.map( (response) => response.json())
  		.toPromise()
  }

  serviceAddTasks(tasks){
      return this._http.post('/api/tasks/addTasks', tasks)
      .map( response => response.json())
      .toPromise()
  }
  
  serviceGetTasks(){
      return this._http.get('/api/tasks')
      .map( response => response.json())
      .toPromise()
  }

  serviceInviteFriend(event_id, friend_email) {
    return this._http.post('/api/invite/' + event_id, {email: friend_email})
    .map( response => response.json())
    .toPromise()
  }

  serviceUserAccept(pending_index) {
    return this._http.post('/api/acceptInvite', {index: pending_index})
    .map( response => response.json())
    .toPromise()
  }

  serviceUserReject(pending_index) {
    return this._http.post('/api/rejectInvite', {index: pending_index})
    .map( response => response.json())
    .toPromise()
  }
}
