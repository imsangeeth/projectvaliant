import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterpagecallnoteComponent } from './masterpagecallnote.component';

describe('MasterpagecallnoteComponent', () => {
  let component: MasterpagecallnoteComponent;
  let fixture: ComponentFixture<MasterpagecallnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterpagecallnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterpagecallnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
