import { TestBed, inject } from '@angular/core/testing';

import { ValueResolverService } from './value-resolver.service';

describe('ValueResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValueResolverService]
    });
  });

  it('should be created', inject([ValueResolverService], (service: ValueResolverService) => {
    expect(service).toBeTruthy();
  }));
});
