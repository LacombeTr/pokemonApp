import { Component } from '@angular/core';
import { POKEMONS } from './pokemon/mock-pokemons'; // on importe la variable 'POKEMONS' depuis Mock-Pokemon (c'est un tableau)
import { Pokemon } from './pokemon/pokemon'; // on importe le type (d'objet) 'pokemon' depuis 
import { find } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

export class AppComponent{

  pokemonList: Pokemon[] = POKEMONS; //on dit que la propriété 'pokemonList' et de type 'Pokemon' est égale a la variable importée 'POKEMONS'
                                     //et que elle ne peut être que de type 'Pokemon'
  pokemonSelected: Pokemon;

  selectPokemon(pokemonID: string){                      // J'indique que l'objet passé a la méthode est de type 'Pokemon'
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonID)

    if(pokemon){ //Si l'objet pokemon existe (a l'id specifié)
        console.log(`Vous avez cliqué sur ${pokemon.name}`); // on va chercher l'attribut 'name' de l'objet 'pokemon'
        this.pokemonSelected = pokemon
      }
    else{
      console.error(`Il n'y a pas de pokemon avec cet ID`);
    }
  }
}
