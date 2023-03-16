import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-alarmas',
  templateUrl: './listado-alarmas.component.html',
  styleUrls: ['./listado-alarmas.component.css']
})
export class ListadoAlarmasComponent {

  configMenu = false;

  switchConfig(){
    this.configMenu = !this.configMenu
  }
}
