import { Component, OnInit } from '@angular/core';
import { User } from './../../user';
import { UserService } from './../../user.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  errors = [];

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
  }

  register() {
  	this._userService.serviceRegister(this.user)
  		.then( (success) => {
  			this._router.navigate(['/dashboard'])
  		})
  		.catch( (err) => {
  			this.errors = JSON.parse(err._body);
  		})
  }

}
