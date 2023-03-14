import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlazarDispositivoComponent } from './enlazar-dispositivo.component';

describe('EnlazarDispositivoComponent', () => {
  let component: EnlazarDispositivoComponent;
  let fixture: ComponentFixture<EnlazarDispositivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlazarDispositivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnlazarDispositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
