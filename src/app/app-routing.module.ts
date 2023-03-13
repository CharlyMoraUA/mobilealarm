import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { ListadoAlarmasComponent } from './listado-alarmas/listado-alarmas.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'iniciarsesion', component: IniciarSesionComponent },
  { path: 'listadoalarmas', component: ListadoAlarmasComponent },
  { path: 'crearcuenta', component: CrearCuentaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
