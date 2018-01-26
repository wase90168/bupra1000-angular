import { TestBed, inject } from '@angular/core/testing';

import { TypeEditResolverService } from './type-edit-resolver.service';

describe('TypeEditResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeEditResolverService]
    });
  });

  it('should be created', inject([TypeEditResolverService], (service: TypeEditResolverService) => {
    expect(service).toBeTruthy();
  }));
});
