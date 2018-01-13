import {Uzer} from '../uzer/uzer';
import {Observable} from 'rxjs/Observable';

export class Role {
  id: number;
  name: string;
  description: string;
  uzers: Observable<Uzer>;
}
