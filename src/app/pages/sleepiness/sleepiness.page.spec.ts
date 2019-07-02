import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepinessPage } from './sleepiness.page';

describe('SleepinessPage', () => {
  let component: SleepinessPage;
  let fixture: ComponentFixture<SleepinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepinessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
