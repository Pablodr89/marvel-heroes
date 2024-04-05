import { Component } from '@angular/core';
import { Result } from '../../interfaces/personaje';
import { MarvelService } from '../../services/marvel.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  personajes: Result[] = []

  constructor(private marvelService: MarvelService) {

  }

  ngOnInit(): void {
    this.marvelService.getPersonajes().subscribe(
      personajes => {
        this.personajes = personajes.data.results.slice(0, 10)
        // console.log(personajes)
      })
  }

}
