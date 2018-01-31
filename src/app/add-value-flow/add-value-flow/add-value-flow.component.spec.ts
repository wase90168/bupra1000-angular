import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddValueFlowComponent } from './add-value-flow.component';

describe('AddValueFlowComponent', () => {
  let component: AddValueFlowComponent;
  let fixture: ComponentFixture<AddValueFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddValueFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddValueFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
