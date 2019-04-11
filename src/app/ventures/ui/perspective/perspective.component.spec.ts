import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerspectiveComponent } from './perspective.component';

describe('PerspectiveComponent', () => {
  let component: PerspectiveComponent;
  let fixture: ComponentFixture<PerspectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerspectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerspectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
