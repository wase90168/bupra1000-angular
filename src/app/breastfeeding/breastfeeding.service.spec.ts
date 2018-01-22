import { TestBed, inject } from '@angular/core/testing';

import { BreastfeedingService } from './breastfeeding.service';

describe('BreastfeedingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreastfeedingService]
    });
  });

  it('should be created', inject([BreastfeedingService], (service: BreastfeedingService) => {
    expect(service).toBeTruthy();
  }));
});
