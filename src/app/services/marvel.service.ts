import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../interfaces/personaje'

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private _http: HttpClient) {

  }

  getPersonajes(offset: number): Observable<Personaje> {
    return this._http.get<Personaje>('http://gateway.marvel.com/v1/public/characters?offset=' + offset + '&ts=1&apikey=661010505df3bcbe7f1564878cce0e74&hash=43d3beea716ac910cadac3692569e005')
  }

  getPersonajesSearch(name: string): Observable<Personaje> {
    // console.log(name)
    return this._http.get<Personaje>('http://gateway.marvel.com/v1/public/characters?nameStartsWith=' + name + '&ts=1&apikey=661010505df3bcbe7f1564878cce0e74&hash=43d3beea716ac910cadac3692569e005')
  }

  getPersonaje(id: number): Observable<Personaje> {
    // console.log(id)
    return this._http.get<Personaje>('https://gateway.marvel.com:443/v1/public/characters/' + id + '?apikey=661010505df3bcbe7f1564878cce0e74')
  }
}
