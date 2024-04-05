import { TarjetaPersonajeComponent } from '../../components/tarjeta-personaje/tarjeta-personaje.component';
import { MarvelService } from './../../services/marvel.service';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { Result } from '../../interfaces/personaje'
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/buscador.pipe';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [TarjetaPersonajeComponent, SpinnerComponent, InfiniteScrollModule, FormsModule, FilterPipe],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {

  personajes: Result[] = []
  allPersonajes: Result[] = []
  carga: Boolean = true
  hasta: number = 8
  searchText: string = ''

  constructor(private marvelService: MarvelService) {

  }

  ngOnInit(): void {
    this.marvelService.getPersonajes().subscribe(
      personajes => {
        this.personajes = personajes.data.results.slice(0, this.hasta)
        this.allPersonajes = personajes.data.results
        this.carga = false
        // console.log(personajes)
      })
  }

  onScroll() {
    this.hasta += 8
    this.marvelService.getPersonajes().subscribe(
      personajes => {
        this.personajes = personajes.data.results.slice(0, this.hasta)
        // console.log(personajes)
      })
  }

  up() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

}
