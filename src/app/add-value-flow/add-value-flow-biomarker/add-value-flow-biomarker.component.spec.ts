import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddValueFlowBiomarkerComponent } from './add-value-flow-biomarker.component';

describe('AddValueFlowBiomarkerComponent', () => {
  let component: AddValueFlowBiomarkerComponent;
  let fixture: ComponentFixture<AddValueFlowBiomarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddValueFlowBiomarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddValueFlowBiomarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
