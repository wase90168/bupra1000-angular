import { TestBed, inject } from '@angular/core/testing';

import { BreastfeedingEditResolverService } from './breastfeeding-edit-resolver.service';

describe('BreastfeedingEditResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreastfeedingEditResolverService]
    });
  });

  it('should be created', inject([BreastfeedingEditResolverService], (service: BreastfeedingEditResolverService) => {
    expect(service).toBeTruthy();
  }));
});
