import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoForm } from './selecao-form';

describe('SelecaoForm', () => {
  let component: SelecaoForm;
  let fixture: ComponentFixture<SelecaoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelecaoForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecaoForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
