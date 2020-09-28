import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon } from 'src/shared/pokemon';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = environment.baseUrl;
  baseSpriteUrl = environment.baseSpriteUrl;

  constructor(private http: HttpClient) { }

  getPokemons(offset: number, limit: number): Observable<Pokemon[]> {
    return this.http.get<any>(`${this.baseUrl}/?offset=${offset}&limit=${limit}`)
    .pipe(
      map(response => {
        // console.log(response);
        return response.results.map((item, idx) => {

          const id: number = idx + offset + 1;

          return {
            id,
            sprite: `${this.baseSpriteUrl}${id}.png`,
            name: item.name
          }
        });
      })
    );
  }

  getPokemonDetails(name: string) {
    return this.http.get<any>(`${this.baseUrl}/${name}`)
  }
}
