import { TarjetaPersonajeComponent } from '../../components/tarjeta-personaje/tarjeta-personaje.component';
import { MarvelService } from './../../services/marvel.service';
import { Component, OnInit } from '@angular/core';
import { Result } from '../../interfaces/personaje'

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [TarjetaPersonajeComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {

  personajes: Result[] = []
  carga: Boolean = false

  constructor(private marvelService: MarvelService) {

  }

  ngOnInit(): void {
    this.marvelService.getPersonajes().subscribe(
      personajes => {
        this.personajes = personajes.data.results
        this.carga = true
        console.log(personajes)
      })
  }

}
