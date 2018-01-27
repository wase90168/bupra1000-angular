import { TestBed, inject } from '@angular/core/testing';

import { PersonEditResolverService } from './person-edit-resolver.service';

describe('PersonEditResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonEditResolverService]
    });
  });

  it('should be created', inject([PersonEditResolverService], (service: PersonEditResolverService) => {
    expect(service).toBeTruthy();
  }));
});
