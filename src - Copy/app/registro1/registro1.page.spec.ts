import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registro1Page } from './registro1.page';

describe('Registro1Page', () => {
  let component: Registro1Page;
  let fixture: ComponentFixture<Registro1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registro1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registro1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
