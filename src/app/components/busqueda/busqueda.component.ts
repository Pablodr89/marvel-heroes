import { Component, Input } from '@angular/core';
import { Result } from '../../interfaces/personaje';
import { TarjetaPersonajeComponent } from '../tarjeta-personaje/tarjeta-personaje.component';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [TarjetaPersonajeComponent],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  @Input() personajesBusqueda: Result[] = []

  constructor() {

  }
}
