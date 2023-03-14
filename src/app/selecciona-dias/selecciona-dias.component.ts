import { Component } from '@angular/core';

@Component({
  selector: 'app-selecciona-dias',
  templateUrl: './selecciona-dias.component.html',
  styleUrls: ['./selecciona-dias.component.css']
})
export class SeleccionaDiasComponent {
 days: string[] =["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
}
