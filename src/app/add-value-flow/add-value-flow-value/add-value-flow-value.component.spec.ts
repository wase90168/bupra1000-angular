import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddValueFlowValueComponent } from './add-value-flow-value.component';

describe('AddValueFlowValueComponent', () => {
  let component: AddValueFlowValueComponent;
  let fixture: ComponentFixture<AddValueFlowValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddValueFlowValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddValueFlowValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
