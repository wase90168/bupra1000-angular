import {Role} from '../role/role';

export class Uzer {
  id: string;
  username: string;
  password: string;
  roles: Array<Role>;
}
