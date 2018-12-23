import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersmstempComponent } from './mastersmstemp.component';

describe('MastersmstempComponent', () => {
  let component: MastersmstempComponent;
  let fixture: ComponentFixture<MastersmstempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersmstempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersmstempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
