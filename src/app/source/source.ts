import {Value} from '../value/value';
import {Observable} from 'rxjs/Observable';

export class Source {
  id:string;
  name:string;
  values:Observable<Value>;
}
