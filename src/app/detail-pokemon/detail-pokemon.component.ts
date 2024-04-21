import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private  route: ActivatedRoute, private router: Router){ }

  ngOnInit() {
    this.pokemonList = POKEMONS;
    const pokemonID: string|null = this.route.snapshot.paramMap.get('id');

    if(pokemonID){
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonID);
    }
  }

  goToPokemonList(){ // méthode qui permet a l'utilisateur d'etre redirigé depuis le composant vers l'accueil
    this.router.navigate(['/pokemon'])
  }
}
