import {Uzer} from './Uzer';

export class Role {
  id: number;
  name: string;
  description: string;
  uzers: Array<Uzer>;
}
