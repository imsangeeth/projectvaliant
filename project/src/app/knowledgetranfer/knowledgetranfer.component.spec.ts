import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgetranferComponent } from './knowledgetranfer.component';

describe('KnowledgetranferComponent', () => {
  let component: KnowledgetranferComponent;
  let fixture: ComponentFixture<KnowledgetranferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgetranferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgetranferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
