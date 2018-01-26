import { TestBed, inject } from '@angular/core/testing';

import { MrEditResolverService } from './mr-edit-resolver.service';

describe('MrEditResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MrEditResolverService]
    });
  });

  it('should be created', inject([MrEditResolverService], (service: MrEditResolverService) => {
    expect(service).toBeTruthy();
  }));
});
