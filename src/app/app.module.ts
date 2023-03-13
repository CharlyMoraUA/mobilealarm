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


import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { BasicButtonComponent } from './basic-button/basic-button.component';
import { ListadoAlarmasComponent } from './listado-alarmas/listado-alarmas.component';
import { ListElementComponent } from './list-element/list-element.component';


@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    PaginaPrincipalComponent,
    CrearCuentaComponent,
    InputFieldComponent,
    BasicButtonComponent,
    ListadoAlarmasComponent,
    ListElementComponent
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
