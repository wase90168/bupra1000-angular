import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddValueFlowViewComponent } from './add-value-flow-view.component';

describe('AddValueFlowViewComponent', () => {
  let component: AddValueFlowViewComponent;
  let fixture: ComponentFixture<AddValueFlowViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddValueFlowViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddValueFlowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
