import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionaPulsacionesComponent } from './selecciona-pulsaciones.component';

describe('SeleccionaPulsacionesComponent', () => {
  let component: SeleccionaPulsacionesComponent;
  let fixture: ComponentFixture<SeleccionaPulsacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionaPulsacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionaPulsacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
