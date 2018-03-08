import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { UserService } from './../user.service';
import { InlineEditorModule } from '@qontu/ngx-inline-editor';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
	user : User;
	user_id: any;
	errors = [];
	tasks: Array<any> = [];
	task: any;

	constructor(private _userService : UserService) { 
		this._userService.serviceCheckSessionUser()
			.then( user => {
				this.user_id = user._id
			})
			.catch ( err => {
				this.errors = JSON.parse(err._body)
			})
	}

  	ngOnInit() {
		this.getTasks();
  	}

	saveEditable(){
		this.tasks.push(this.task);
		this.task = "";
		console.log(this.tasks);
  		this._userService.serviceAddTasks(this.tasks)
  			.then( res => {console.log("saved tasks array")})
  			.catch( err => {
  				this.errors = JSON.parse(err._body);
  			})
	}

	updateEditable(){
		this._userService.serviceAddTasks(this.tasks)
  			.then( res => {console.log("saved tasks array")})
  			.catch( err => {
  				this.errors = JSON.parse(err._body);
  			})
	}
		
	getTasks(){
		this._userService.serviceGetTasks()
		.then ( tasks => {
			this.tasks = tasks
		})
		.catch( err => {
			this.errors = JSON.parse(err._body)
		})
	}

	deleteTask(idx){
		this.tasks.splice(idx,1);
		this._userService.serviceAddTasks(this.tasks)
		.then ( user => {
			this.tasks = user.tasks
		})
		.catch( err => {
			this.errors = JSON.parse(err._body)
		})
	}

}
