import { TestBed, inject } from '@angular/core/testing';

import { DimensionEditResolverService } from './dimension-edit-resolver.service';

describe('DimensionEditResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DimensionEditResolverService]
    });
  });

  it('should be created', inject([DimensionEditResolverService], (service: DimensionEditResolverService) => {
    expect(service).toBeTruthy();
  }));
});
