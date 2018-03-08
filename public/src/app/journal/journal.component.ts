import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Journal } from './../journal';
import { JournalService } from './../journal.service';
import { DateObservableService } from './../date-observable.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  journal = new Journal();
  today = new Date;
  create: boolean;
  @Input() newDate;
  subscription: Subscription;

  constructor(private _dateObservableService: DateObservableService, private _journalService: JournalService) {
  }

  ngOnChanges(changes: any) {
    if (changes.newDate) {
      this.findEntry(this.newDate);
    }
  }

  ngOnInit() {
    this.findEntry(this.today);
  }

  findEntry(date) {
    this._journalService.serviceFindEntry(date).then ( (journal) => { this.create = false; this.journal = journal }).catch(( err) => { this.create = true; this.journal = new Journal()})
  }

  serviceCreateEntry() {
    this.journal.date = this.newDate;
    console.log(this.journal);
    this._journalService.serviceCreateEntry(this.journal).then( (data) => {this.findEntry(this.newDate)}).catch();
  }



  saveEditable(value) {
    //call to http service
    console.log("STARTED");
    this._journalService.serviceEditEntry(this.journal).then( (data) => {this.findEntry(this.newDate)}).catch();
  }
}
