import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Characters } from 'src/app/interfaces/characters.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http.get<any>('https://rickandmortyapi.com/api/character');
  }

  getCharactersById(id: number){
    return this.http.get<Characters[]>('https://rickandmortyapi.com/api/character/' + id)
  }
}
