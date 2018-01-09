import {Uzer} from '../uzer/uzer';

export class Role {
  id: number;
  name: string;
  description: string;
  uzers: Array<Uzer>;
}
