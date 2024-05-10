import { Component } from '@angular/core';

@Component({
  selector: 'app-flecha-arriba',
  standalone: true,
  imports: [],
  templateUrl: './flecha-arriba.component.html',
  styleUrl: './flecha-arriba.component.css'
})
export class FlechaArribaComponent {

  up() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
}
