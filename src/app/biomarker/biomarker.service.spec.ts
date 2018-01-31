import {inject, TestBed} from '@angular/core/testing';

import {BiomarkerService} from './biomarker.service';

describe('BiomarkerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BiomarkerService]
    });
  });

  it('should be created', inject([BiomarkerService], (service: BiomarkerService) => {
    expect(service).toBeTruthy();
  }));
});
