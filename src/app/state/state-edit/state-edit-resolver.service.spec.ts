import { TestBed, inject } from '@angular/core/testing';

import { StateEditResolverService } from './state-edit-resolver.service';

describe('StateEditResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateEditResolverService]
    });
  });

  it('should be created', inject([StateEditResolverService], (service: StateEditResolverService) => {
    expect(service).toBeTruthy();
  }));
});
