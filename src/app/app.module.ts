import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';




import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { BasicButtonComponent } from './basic-button/basic-button.component';
import { ListadoAlarmasComponent } from './listado-alarmas/listado-alarmas.component';
import { ListElementComponent } from './list-element/list-element.component';
import { EnlazarDispositivoComponent } from './enlazar-dispositivo/enlazar-dispositivo.component';
import { SeleccionaPulsacionesComponent } from './selecciona-pulsaciones/selecciona-pulsaciones.component';
import { SeleccionaTiempoComponent } from './selecciona-tiempo/selecciona-tiempo.component';
import { SeleccionaHoraComponent } from './selecciona-hora/selecciona-hora.component';
import { SeleccionaDiasComponent } from './selecciona-dias/selecciona-dias.component';



@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    PaginaPrincipalComponent,
    CrearCuentaComponent,
    InputFieldComponent,
    BasicButtonComponent,
    ListadoAlarmasComponent,
    ListElementComponent,
    EnlazarDispositivoComponent,
    SeleccionaPulsacionesComponent,
    SeleccionaTiempoComponent,
    SeleccionaHoraComponent,
    SeleccionaDiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
