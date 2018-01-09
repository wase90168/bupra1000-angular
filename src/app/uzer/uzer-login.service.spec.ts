import { TestBed, inject } from '@angular/core/testing';

import { UzerLoginService } from './uzer-login.service.ts.V2';

describe('UzerLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UzerLoginService]
    });
  });

  it('should be created', inject([UzerLoginService], (service: UzerLoginService) => {
    expect(service).toBeTruthy();
  }));
});
