/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DondeComponent } from './Donde.component';

describe('DondeComponent', () => {
  let component: DondeComponent;
  let fixture: ComponentFixture<DondeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DondeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DondeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
