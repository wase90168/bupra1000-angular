import {Value} from '../value/value';

export class State {
  id: string;
  text: string;
  description: string;
  null_allowed: boolean;
  values: Array<Value>;
}
