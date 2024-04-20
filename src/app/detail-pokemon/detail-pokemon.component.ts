import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: ``
})
export class DetailPokemonComponent {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private  route: ActivatedRoute){

  }

  ngOnInit() {
    this.pokemonList = POKEMONS;
    const pokemonID: string|null = this.route.snapshot.paramMap.get('id');

    if(pokemonID){
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonID);
    }
  }
}
