import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddValueFlowDimensionComponent } from './add-value-flow-dimension.component';

describe('AddValueFlowDimensionComponent', () => {
  let component: AddValueFlowDimensionComponent;
  let fixture: ComponentFixture<AddValueFlowDimensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddValueFlowDimensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddValueFlowDimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
