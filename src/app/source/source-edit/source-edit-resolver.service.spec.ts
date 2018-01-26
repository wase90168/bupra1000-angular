import { TestBed, inject } from '@angular/core/testing';

import { SourceEditResolverService } from './source-edit-resolver.service';

describe('SourceEditResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SourceEditResolverService]
    });
  });

  it('should be created', inject([SourceEditResolverService], (service: SourceEditResolverService) => {
    expect(service).toBeTruthy();
  }));
});
