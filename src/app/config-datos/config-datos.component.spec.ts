import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDatosComponent } from './config-datos.component';

describe('ConfigDatosComponent', () => {
  let component: ConfigDatosComponent;
  let fixture: ComponentFixture<ConfigDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
