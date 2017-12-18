import {Role} from './Role';

export interface Uzer {
  id: number;
  userName: string;
  password: string;
  roles: Array<Role>;
}
