import { TestBed, inject } from '@angular/core/testing';

import { EventDrivenService } from './event-driven.service';

describe('EventDrivenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventDrivenService]
    });
  });

  it('should be created', inject([EventDrivenService], (service: EventDrivenService) => {
    expect(service).toBeTruthy();
  }));
});
