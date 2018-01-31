import { Injectable } from '@angular/core';
import {MR} from "../mr/mr";
import {Dimension} from "../dimension/dimension";
import {Source} from "../source/source";
import {Value} from "../value/value";
import {State} from "../state/state";
import {Category} from "../category/category";

@Injectable()
export class AddValueFlowService {

  public _suffix: string;
  public _prefix: string;

  public _mr: MR;

  public _category: Category;
  public _dimension: Dimension;

  public _source: Source;

  public _value: string;
  public _state: State;

  constructor() { }


  clearAll(){
    this._suffix = null;
    this._prefix = null;
    this._mr = null;
    this._dimension = null;
    this._source = null;
    this._value = null;
    this._state = null;
    this._category = null;
  }


}
