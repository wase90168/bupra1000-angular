import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BiomarkerEditComponent} from './biomarker-edit.component';

describe('BiomarkerEditComponent', () => {
  let component: BiomarkerEditComponent;
  let fixture: ComponentFixture<BiomarkerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BiomarkerEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiomarkerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
