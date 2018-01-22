import { TestBed, inject } from '@angular/core/testing';

import { PersonPersonEditResolverService } from './person-person-edit-resolver.service';

describe('PersonPersonEditResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonPersonEditResolverService]
    });
  });

  it('should be created', inject([PersonPersonEditResolverService], (service: PersonPersonEditResolverService) => {
    expect(service).toBeTruthy();
  }));
});
