import { TestBed, inject } from '@angular/core/testing';

import { PrintsService } from './prints.service';

describe('PrintsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrintsService]
    });
  });

  it('should be created', inject([PrintsService], (service: PrintsService) => {
    expect(service).toBeTruthy();
  }));
});
