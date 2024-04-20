import { Component} from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent{
  pokemonList: Pokemon[] = POKEMONS; //on dit que la propriété 'pokemonList' et de type 'Pokemon' est égale a la variable importée 'POKEMONS'
                                     //et que elle ne peut être que de type 'Pokemon'
}