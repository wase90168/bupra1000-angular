import {Role} from '../role/Role';

export class Uzer {
  id: string;
  username: string;
  password: string;
  roles: Array<Role>;
}
