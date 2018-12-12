import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallviewscreenComponent } from './callviewscreen.component';

describe('CallviewscreenComponent', () => {
  let component: CallviewscreenComponent;
  let fixture: ComponentFixture<CallviewscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallviewscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallviewscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
