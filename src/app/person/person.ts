import {Value} from '../value/value';
import {Type} from '../type/type';
import {Person_Person} from '../person-person/person-person';
import {Observable} from 'rxjs/Observable';

export class Person {
  id: string;
  prefix: string;
  suffix: string;
  type: Type;
  person_person: Person_Person;
}
