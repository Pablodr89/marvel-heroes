import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/personaje';
import { initFlowbite } from 'flowbite';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-tarjeta-personaje',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tarjeta-personaje.component.html',
  styleUrl: './tarjeta-personaje.component.css'
})
export class TarjetaPersonajeComponent implements OnInit {

  @Input() personaje!: Result

  ngOnInit(): void {
    initFlowbite()
    console.log(this.personaje)
  }

}
