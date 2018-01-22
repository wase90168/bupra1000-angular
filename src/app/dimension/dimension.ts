import {Category} from '../category/category';
import {Value} from '../value/value';
import {Observable} from 'rxjs/Observable';

export class Dimension {
  id:string;
  name:string;
  dimension:string;
  description:string;
  category:Category;
}
