import { TarjetaPersonajeComponent } from '../../components/tarjeta-personaje/tarjeta-personaje.component';
import { MarvelService } from './../../services/marvel.service';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { Result } from '../../interfaces/personaje'
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [TarjetaPersonajeComponent, SpinnerComponent, InfiniteScrollModule, ReactiveFormsModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {

  personajes: Result[] = []
  carga: Boolean = true
  offset: number = 0

  miForm: FormGroup = this._fb.group({
    nombre: ''
  })

  constructor(private marvelService: MarvelService, private _fb: FormBuilder) {

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
    this.marvelService.getPersonajesSearch(this.miForm.value.nombre).subscribe(
      personajes => {
        this.personajes = personajes.data.results
        // console.log(this.personajes)
      })
  }

  volver() {
    location.reload()
  }
}
