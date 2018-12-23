import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdepartmentComponent } from './masterdepartment.component';

describe('MasterdepartmentComponent', () => {
  let component: MasterdepartmentComponent;
  let fixture: ComponentFixture<MasterdepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterdepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
