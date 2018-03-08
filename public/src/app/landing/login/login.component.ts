import { Component, OnInit } from '@angular/core';
import { User } from './../../user';
import { UserService } from './../../user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user_login = new User();
  errors = [];

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
  }

  login() {
  	this._userService.serviceLogin(this.user_login)
  		.then( (success) => {
  			this._router.navigate(['/dashboard'])
  		})
  		.catch( (err) => {
  			this.errors = JSON.parse(err._body);
  		})
  }

}
