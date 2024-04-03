import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador',
  standalone: true
})
export class BuscadorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
