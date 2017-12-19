import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonPersonComponent } from './person-person.component';

describe('PersonPersonComponent', () => {
  let component: PersonPersonComponent;
  let fixture: ComponentFixture<PersonPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
