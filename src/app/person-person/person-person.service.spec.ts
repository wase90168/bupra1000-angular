import { TestBed, inject } from '@angular/core/testing';
import {Person_PersonService} from "./person-person.service";


describe('PersonPersonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Person_PersonService]
    });
  });

  it('should be created', inject([Person_PersonService], (service: Person_PersonService) => {
    expect(service).toBeTruthy();
  }));
});
