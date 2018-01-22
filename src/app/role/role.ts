import {Uzer} from '../uzer/uzer';
import {Observable} from 'rxjs/Observable';

export class Role {
  id: string;
  name: string;
  description: string;
  uzers: Observable<Uzer>;
}
