import {Value} from '../value/value';
import {Observable} from 'rxjs/Observable';

export class MR {
id:string;
name:string;
description:string;
values: Observable<Value>;
}
