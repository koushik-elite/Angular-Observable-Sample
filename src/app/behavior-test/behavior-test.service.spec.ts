import { TestBed, inject, async } from '@angular/core/testing';

import { BehaviorTestService } from './behavior-test.service';
import { BehaviorSubject, AsyncSubject, ReplaySubject, Observable } from 'rxjs/RX';

describe('BehaviorTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BehaviorTestService, 
        {provide:BehaviorSubject, useValue: "BehaviorSubject"},
        {provide:AsyncSubject, useValue: "AsyncSubject"},
        {provide:ReplaySubject, useValue: "ReplaySubject"}]
    });
  });

  it('should be created', async(inject([BehaviorTestService], (service: BehaviorTestService) => {
    expect(service).toBeTruthy();
  })));

});
