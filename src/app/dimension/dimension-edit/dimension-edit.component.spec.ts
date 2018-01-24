import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionEditComponent } from './dimension-edit.component';

describe('DimensionEditComponent', () => {
  let component: DimensionEditComponent;
  let fixture: ComponentFixture<DimensionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimensionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimensionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
