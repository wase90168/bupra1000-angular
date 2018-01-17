import { TestBed, inject } from '@angular/core/testing';

import { ValueEditResolverService } from './value-edit-resolver.service';

describe('ValueEditResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValueEditResolverService]
    });
  });

  it('should be created', inject([ValueEditResolverService], (service: ValueEditResolverService) => {
    expect(service).toBeTruthy();
  }));
});
