import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestingComponent } from './investing.component';

describe('InvestingComponent', () => {
  let component: InvestingComponent;
  let fixture: ComponentFixture<InvestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
