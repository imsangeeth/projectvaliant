import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterpagektComponent } from './masterpagekt.component';

describe('MasterpagektComponent', () => {
  let component: MasterpagektComponent;
  let fixture: ComponentFixture<MasterpagektComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterpagektComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterpagektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
