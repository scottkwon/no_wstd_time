import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DateObservableService {

	curr_date = new Date();

	observedDate = new BehaviorSubject(this.curr_date);

  constructor() { }

  updateDate(clicked_date: Date) {
  	this.observedDate.next(clicked_date);
  }
}
