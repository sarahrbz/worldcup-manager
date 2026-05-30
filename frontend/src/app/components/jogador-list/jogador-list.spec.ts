import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadorList } from './jogador-list';

describe('JogadorList', () => {
  let component: JogadorList;
  let fixture: ComponentFixture<JogadorList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JogadorList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogadorList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
