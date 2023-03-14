import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionaHoraComponent } from './selecciona-hora.component';

describe('SeleccionaHoraComponent', () => {
  let component: SeleccionaHoraComponent;
  let fixture: ComponentFixture<SeleccionaHoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionaHoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionaHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
