import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemons'; // on importe la variable 'POKEMONS' depuis Mock-Pokemon (c'est un tableau)
import { Pokemon } from './pokemon'; // on importe le type (d'objet) 'pokemon' depuis 

@Component({
  selector: 'app-root',
  template: `
    <h1>Liste de pokemons</h1>`,
})

export class AppComponent implements OnInit{

  pokemonList: Pokemon[] = POKEMONS; //on dit que la variable 'pokemonList' est égale a la variable importée 'POKEMONS'
                                     //et que elle ne peut être que de type 'Pokemon'

  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[5]) // on passe a la methode le 5eme objet du tableau 'pokemonList'
  }

  selectPokemon(pokemon: Pokemon){                      // J'indique que l'objet passé a la méthode est de type 'Pokemon'
    console.log(`Vous avez cliqué sur ${pokemon.name}`); // on va chercher l'attribut 'name' de l'objet 'pokemon'
  }
}
