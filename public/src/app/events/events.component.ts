import { Component, OnInit, OnDestroy } from '@angular/core';
import { Create } from './../create';
import { CreateService } from './../create.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DateObservableService } from './../date-observable.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
	subscription: Subscription;
	newDate = new Date;
	eventList=[];

  constructor(
  	private _dateObservableService: DateObservableService,
  	private _createService: CreateService,
    private _router: Router
  	) { }

  ngOnInit() {
  	this.subscription = this._dateObservableService.observedDate.subscribe( date=>{
  	this.newDate = date;
  	this._createService.serviceGetEvents(this.newDate)
  		.then( events=>{
  			this.eventList = events;
  		})
  		.catch();
  	})
  }

  ngOnDestroy(){
  	this.subscription.unsubscribe();
  }
}
