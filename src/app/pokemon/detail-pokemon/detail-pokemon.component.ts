import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(
    private  route: ActivatedRoute,
    private router: Router,
    private pokemonservice : PokemonService
  ){ }

  ngOnInit() {
    const pokemonID: string|null = this.route.snapshot.paramMap.get('id');

    if(pokemonID){
      this.pokemon = this.pokemonservice.getPokemonByID(+pokemonID);
    }
  }

  goToPokemonList(){ // méthode qui permet a l'utilisateur d'etre redirigé depuis le composant vers l'accueil
    this.router.navigate(['/pokemon'])
  }

  goToPokemonForm(pokemon: Pokemon) {
    this.router.navigate(['editPokemon/pokemon',pokemon.id]);
    }
}
