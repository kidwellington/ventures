import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CupidComponent } from './cupid.component';

describe('CupidComponent', () => {
  let component: CupidComponent;
  let fixture: ComponentFixture<CupidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
