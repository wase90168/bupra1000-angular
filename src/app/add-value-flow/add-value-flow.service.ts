import {Injectable} from '@angular/core';
import {MR} from '../mr/mr';
import {Biomarker} from '../biomarker/biomarker';
import {Source} from '../source/source';
import {State} from '../state/state';
import {Category} from '../category/category';
import {Dimension} from '../dimension/dimension';
import {Comment} from '../comment/comment';

@Injectable()
export class AddValueFlowService {

  public _suffix: string;
  public _prefix: string;

  public _mr: MR;

  public _category: Category;
  public _biomarker: Biomarker;

  public _source: Source;

  public _value: string;
  public _state: State;

  public _comment: Comment;
  public _dimension: Dimension;

  constructor() { }


  clearAll(){
    this._suffix = null;
    this._prefix = null;
    this._mr = null;
    this._biomarker = null;
    this._source = null;
    this._value = null;
    this._state = null;
    this._category = null;
    this._comment = null;
    this._dimension = null;
  }


}
