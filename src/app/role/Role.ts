import {Uzer} from '../uzer/Uzer';

export class Role {
  id: number;
  name: string;
  description: string;
  uzers: Array<Uzer>;
}
