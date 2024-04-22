import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Injectable(// Decorateur injectable qui indique que notre service peut étre injecter 
  // {providedIn: 'root'} // 'root' indique que on veut utiliser la meme instance du service a travers toute l'app
)

export class PokemonService {

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonByID(pokemonID: number): Pokemon|undefined{
    return POKEMONS.find(pokemon => pokemon.id == pokemonID);
  }

  getPokemonTypeList(): string[]{
    return ['Plante',
            'Feu',
            'Eau',
            'Insecte',
            'Normal',
            'Electrik',
            'Poison',
            'Fée',
            'Vol',
            'Combat',
            'Psy'];
  }
}
