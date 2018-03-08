import { Component, OnInit, OnDestroy } from '@angular/core';
import { Create } from './../create';
import { CreateService } from './../create.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DateObservableService } from './../date-observable.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newDate: Date;
  newThing = new Create();
  errors = [];
  subscription: Subscription;

  constructor(private _createService: CreateService, private _router: Router, private _route: ActivatedRoute, private _dateObservableService: DateObservableService) { 
    
  }

  ngOnInit() {
    // this.subscription = this._dateObservableService.observedDate.subscribe ( date => { this.newDate = date})
    // this.newThing.start_date = this.newDate.toJSON().slice(0,10);
  }

  create() {
    this._createService.serviceCreate(this.newThing)
      .then( (success) => {
        this._router.navigate(['/dashboard', 'events'])
      })
      .catch(
      )
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
