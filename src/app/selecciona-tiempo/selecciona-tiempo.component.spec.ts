import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionaTiempoComponent } from './selecciona-tiempo.component';

describe('SeleccionaTiempoComponent', () => {
  let component: SeleccionaTiempoComponent;
  let fixture: ComponentFixture<SeleccionaTiempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionaTiempoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionaTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
