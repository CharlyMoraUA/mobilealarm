import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionaDiasComponent } from './selecciona-dias.component';

describe('SeleccionaDiasComponent', () => {
  let component: SeleccionaDiasComponent;
  let fixture: ComponentFixture<SeleccionaDiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionaDiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionaDiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
