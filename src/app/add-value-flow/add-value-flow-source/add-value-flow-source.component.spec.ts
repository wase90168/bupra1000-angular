import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddValueFlowSourceComponent } from './add-value-flow-source.component';

describe('AddValueFlowSourceComponent', () => {
  let component: AddValueFlowSourceComponent;
  let fixture: ComponentFixture<AddValueFlowSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddValueFlowSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddValueFlowSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
