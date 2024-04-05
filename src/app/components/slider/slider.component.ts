import { Component, Input } from '@angular/core';
import { Result } from '../../interfaces/personaje';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  @Input() personajes: Result[] = []
}
