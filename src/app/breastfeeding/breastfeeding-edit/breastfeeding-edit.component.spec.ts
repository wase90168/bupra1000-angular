import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreastfeedingEditComponent } from './breastfeeding-edit.component';

describe('BreastfeedingEditComponent', () => {
  let component: BreastfeedingEditComponent;
  let fixture: ComponentFixture<BreastfeedingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreastfeedingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreastfeedingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
