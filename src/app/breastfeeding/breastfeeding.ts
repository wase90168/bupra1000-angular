import {Person_Person} from '../person-person/person-person';
import {Observable} from 'rxjs/Observable';

export class Breastfeeding {
  id:string;
  person_persons: Observable<Person_Person>;
  breastfeeding: boolean;
  description: string;
}
