import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Attempt1Component } from './attempt1.component';

describe('Attempt1Component', () => {
  let component: Attempt1Component;
  let fixture: ComponentFixture<Attempt1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Attempt1Component]
    });
    fixture = TestBed.createComponent(Attempt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
