import { Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { PersonajeMarvelComponent } from './pages/personaje-marvel/personaje-marvel.component';

export const routes: Routes = [
  {
    path: '',
    component: ListadoComponent
  },
  {
    path: 'personaje/:id',
    component: PersonajeMarvelComponent
  }
];
