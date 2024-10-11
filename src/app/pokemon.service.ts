// import { inject, Injectable } from '@angular/core';
import { Pokemon, PokemonList } from './pokemon.model';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

import { Observable } from "rxjs";

// @Injectable({
//   providedIn: 'root',
// })
// export class PokemonService {
//   private readonly http = inject(HttpClient);
//   private readonly POKEMON_API_URL = 'http://localhost:3000/pokemons';

//   // Retourne la liste de tous les Pokémons.

//   getPokemonList(): Observable<PokemonList> {
//     return this.http.get<PokemonList>(this.POKEMON_API_URL);
//   }

//   // Retourne le pokémon avec l'identifiant passé en paramètre.

//   getPokemonById(id: number): Observable<Pokemon> {
//     return this.http.get<Pokemon>(`${this.POKEMON_API_URL}/${id}`);
//   }

//   // Retourne la liste des types valides pour un pokémon.

//   getPokemonTypeList(): string[] {
//     return [
//       'Plante',
//       'Feu',
//       'Eau',
//       'Insecte',
//       'Normal',
//       'Electrik',
//       'Poison',
//       'Fée',
//       'Vol',
//     ];
//   }

//   updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
//     return this.http.put<Pokemon>(
//       `${this.POKEMON_API_URL}/${pokemon.id}`,
//       pokemon
//     );
//   }

//   deletePokemon(pokemonId: number): Observable<void> {
//     return this.http.delete<void>(`${this.POKEMON_API_URL}/${pokemonId}`);
//   }

//   addPokemon(pokemon: Omit<Pokemon, 'id' | 'created'>): Observable<Pokemon> {
//     return this.http.post<Pokemon>(this.POKEMON_API_URL, pokemon)
//   }
// }

export abstract class PokemonService {
  abstract getPokemonList(): Observable<PokemonList>;
  abstract getPokemonById(id: number): Observable<Pokemon>;
  abstract updatePokemon(pokemon: Pokemon): Observable<Pokemon>;
  abstract deletePokemon(pokemonId: number): Observable<void>;
  abstract addPokemon(pokemon: Omit<Pokemon, 'id'>): Observable<Pokemon>;
  abstract getPokemonTypeList(): string[];
}