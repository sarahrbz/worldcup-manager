import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadorForm } from './jogador-form';

describe('JogadorForm', () => {
  let component: JogadorForm;
  let fixture: ComponentFixture<JogadorForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JogadorForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogadorForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
