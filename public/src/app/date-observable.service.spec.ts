import { TestBed, inject } from '@angular/core/testing';

import { DateObservableService } from './date-observable.service';

describe('DateObservableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateObservableService]
    });
  });

  it('should be created', inject([DateObservableService], (service: DateObservableService) => {
    expect(service).toBeTruthy();
  }));
});
