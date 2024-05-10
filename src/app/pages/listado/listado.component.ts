import { TarjetaPersonajeComponent } from '../../components/tarjeta-personaje/tarjeta-personaje.component';
import { MarvelService } from './../../services/marvel.service';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { Result } from '../../interfaces/personaje'
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { BusquedaComponent } from '../../components/busqueda/busqueda.component';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [TarjetaPersonajeComponent, SpinnerComponent, BusquedaComponent, InfiniteScrollModule, FormsModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {

  personajes: Result[] = []
  personajesBusqueda: Result[] = []
  carga: Boolean = true
  offset: number = 0
  nombre: string = ''

  constructor(private marvelService: MarvelService) {

  }

  ngOnInit(): void {
    this.marvelService.getPersonajes(this.offset).subscribe(
      personajes => {
        this.personajes = personajes.data.results
        this.carga = false
        // console.log(personajes)
      })
  }

  onScroll() {
    this.offset += 20
    this.marvelService.getPersonajes(this.offset).subscribe(
      personajes => {
        personajes.data.results.forEach(element => {
          this.personajes.push(element)
        })
        // console.log(this.personajes)
      })
  }

  up() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  search() {
    this.marvelService.getPersonajesSearch(this.nombre).subscribe(
      personajes => {
        this.personajesBusqueda = personajes.data.results
        this.carga = false
        // console.log(this.personajes)
      })
  }

  volver() {
    location.reload()
  }
}
