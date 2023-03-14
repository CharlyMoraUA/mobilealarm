import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmarComponent } from './confirmar/confirmar.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { EnlazarDispositivoComponent } from './enlazar-dispositivo/enlazar-dispositivo.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { ListadoAlarmasComponent } from './listado-alarmas/listado-alarmas.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { SeleccionaDiasComponent } from './selecciona-dias/selecciona-dias.component';
import { SeleccionaHoraComponent } from './selecciona-hora/selecciona-hora.component';
import { SeleccionaPulsacionesComponent } from './selecciona-pulsaciones/selecciona-pulsaciones.component';
import { SeleccionaTiempoComponent } from './selecciona-tiempo/selecciona-tiempo.component';

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'iniciarsesion', component: IniciarSesionComponent },
  { path: 'listadoalarmas', component: ListadoAlarmasComponent },
  { path: 'enlazardisp', component: EnlazarDispositivoComponent },
  { path: 'seleccionapulsaciones', component: SeleccionaPulsacionesComponent },
  { path: 'seleccionatiempo', component: SeleccionaTiempoComponent },
  { path: 'seleccionahora', component: SeleccionaHoraComponent },
  { path: 'seleccionadias', component: SeleccionaDiasComponent },
  { path: 'confirmar', component: ConfirmarComponent },
  { path: 'crearcuenta', component: CrearCuentaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
