import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoList } from './selecao-list';

describe('SelecaoList', () => {
  let component: SelecaoList;
  let fixture: ComponentFixture<SelecaoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelecaoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecaoList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
