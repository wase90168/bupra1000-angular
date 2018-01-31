import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddValueFlowMrComponent } from './add-value-flow-mr.component';

describe('AddValueFlowMrComponent', () => {
  let component: AddValueFlowMrComponent;
  let fixture: ComponentFixture<AddValueFlowMrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddValueFlowMrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddValueFlowMrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
