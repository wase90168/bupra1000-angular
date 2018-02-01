import {State} from '../state/state';
import {Person} from '../person/person';
import {MR} from '../mr/mr';
import {Source} from '../source/source';
import {Biomarker} from '../biomarker/biomarker';
import {Dimension} from '../dimension/dimension';

export class Value {
  id: string;
  value: string;
  state: State;
  person: Person;
  mr: MR;
  source: Source;
  biomarker: Biomarker;
  dimension: Dimension;
  comment: Comment;
}
