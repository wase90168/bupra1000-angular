import { TestBed, inject } from '@angular/core/testing';

import { CategoryEditResolverService } from './category-edit-resolver.service';

describe('CategoryEditResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryEditResolverService]
    });
  });

  it('should be created', inject([CategoryEditResolverService], (service: CategoryEditResolverService) => {
    expect(service).toBeTruthy();
  }));
});
