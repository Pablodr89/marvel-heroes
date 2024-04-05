import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/personaje';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MarvelService } from '../../services/marvel.service';
import { switchMap } from 'rxjs';
import { SpinnerComponent } from '../../components/spinner/spinner.component';

@Component({
  selector: 'app-personaje-marvel',
  standalone: true,
  imports: [SpinnerComponent, RouterLink],
  templateUrl: './personaje-marvel.component.html',
  styleUrl: './personaje-marvel.component.css'
})
export class PersonajeMarvelComponent implements OnInit {
  @Input() personaje!: Result
  carga: Boolean = true

  constructor(private activatedRoute: ActivatedRoute, private _marvelService: MarvelService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this._marvelService.getPersonaje(id))
      )
      .subscribe(personaje => {
        this.personaje = personaje.data.results[0]
        this.carga = false
        // console.log(personaje)
      })
  }
}
