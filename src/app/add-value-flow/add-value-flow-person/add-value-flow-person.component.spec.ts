import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddValueFlowPersonComponent } from './add-value-flow-person.component';

describe('AddValueFlowPersonComponent', () => {
  let component: AddValueFlowPersonComponent;
  let fixture: ComponentFixture<AddValueFlowPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddValueFlowPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddValueFlowPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
