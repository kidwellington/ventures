import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D10xComponent } from './d10x.component';

describe('D10xComponent', () => {
  let component: D10xComponent;
  let fixture: ComponentFixture<D10xComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D10xComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D10xComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
