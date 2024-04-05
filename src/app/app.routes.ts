import { Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { PersonajeMarvelComponent } from './pages/personaje-marvel/personaje-marvel.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'listado',
    component: ListadoComponent
  },
  {
    path: 'personaje/:id',
    component: PersonajeMarvelComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];
