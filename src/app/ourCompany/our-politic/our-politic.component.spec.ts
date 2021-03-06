/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OurPoliticComponent } from './our-politic.component';

describe('OurPoliticComponent', () => {
  let component: OurPoliticComponent;
  let fixture: ComponentFixture<OurPoliticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurPoliticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurPoliticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
