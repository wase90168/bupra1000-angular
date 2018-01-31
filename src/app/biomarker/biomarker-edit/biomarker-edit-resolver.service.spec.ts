import {inject, TestBed} from '@angular/core/testing';

import {BiomarkerEditResolverService} from './biomarker-edit-resolver.service';

describe('BiomarkerEditResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BiomarkerEditResolverService]
    });
  });

  it('should be created', inject([BiomarkerEditResolverService], (service: BiomarkerEditResolverService) => {
    expect(service).toBeTruthy();
  }));
});
