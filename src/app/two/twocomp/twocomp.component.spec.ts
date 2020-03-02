import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwocompComponent } from './twocomp.component';

describe('TwocompComponent', () => {
  let component: TwocompComponent;
  let fixture: ComponentFixture<TwocompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwocompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
