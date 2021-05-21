/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HayElectricidadComponent } from './hay-electricidad.component';

describe('HayElectricidadComponent', () => {
  let component: HayElectricidadComponent;
  let fixture: ComponentFixture<HayElectricidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HayElectricidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HayElectricidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
