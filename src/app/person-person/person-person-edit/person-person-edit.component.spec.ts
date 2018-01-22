import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonPersonEditComponent } from './person-person-edit.component';

describe('PersonPersonEditComponent', () => {
  let component: PersonPersonEditComponent;
  let fixture: ComponentFixture<PersonPersonEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonPersonEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonPersonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
