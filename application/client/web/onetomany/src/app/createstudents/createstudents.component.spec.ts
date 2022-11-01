import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatestudentsComponent } from './createstudents.component';

describe('CreatestudentsComponent', () => {
  let component: CreatestudentsComponent;
  let fixture: ComponentFixture<CreatestudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatestudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatestudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});