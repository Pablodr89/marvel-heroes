import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/personaje';

@Component({
  selector: 'app-tarjeta-personaje',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-personaje.component.html',
  styleUrl: './tarjeta-personaje.component.css'
})
export class TarjetaPersonajeComponent implements OnInit {

  @Input() personaje!: Result

  ngOnInit(): void {
    console.log(this.personaje)
  }

}
