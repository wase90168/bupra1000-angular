import {Uzer} from './Uzer';

export interface Role {
  id: number;
  name: string;
  description: string;
  uzers: Array<Uzer>;
}
