import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../interfaces/personaje';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: Result[], searchInput: string) {
    searchInput = searchInput ? searchInput.toLowerCase() : '';
    return searchInput ? value.filter(personaje => personaje.name.toLowerCase().includes(searchInput)) : value;
  }
}

