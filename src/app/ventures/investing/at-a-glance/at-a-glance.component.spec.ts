import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtAGlanceComponent } from './at-a-glance.component';

describe('AtAGlanceComponent', () => {
  let component: AtAGlanceComponent;
  let fixture: ComponentFixture<AtAGlanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtAGlanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtAGlanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
