import { TestBed, inject } from '@angular/core/testing';

import { PersonPersonResolverService } from './person-person-resolver.service';

describe('PersonPersonResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonPersonResolverService]
    });
  });

  it('should be created', inject([PersonPersonResolverService], (service: PersonPersonResolverService) => {
    expect(service).toBeTruthy();
  }));
});
