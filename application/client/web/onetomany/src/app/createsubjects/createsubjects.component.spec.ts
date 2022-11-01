import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesubjectsComponent } from './createsubjects.component';

describe('CreatesubjectsComponent', () => {
  let component: CreatesubjectsComponent;
  let fixture: ComponentFixture<CreatesubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});