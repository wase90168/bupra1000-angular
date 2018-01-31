import { TestBed, inject } from '@angular/core/testing';

import { AddValueFlowService } from './add-value-flow.service';

describe('AddValueFlowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddValueFlowService]
    });
  });

  it('should be created', inject([AddValueFlowService], (service: AddValueFlowService) => {
    expect(service).toBeTruthy();
  }));
});
