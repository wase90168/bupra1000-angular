import {Role} from '../role/role';
import {Observable} from 'rxjs/Observable';

export class Uzer {
  id: string;
  username: string;
  password: string;
  roles: Observable<Role>;


}
