import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registro2Page } from './registro2.page';

describe('Registro2Page', () => {
  let component: Registro2Page;
  let fixture: ComponentFixture<Registro2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registro2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registro2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
