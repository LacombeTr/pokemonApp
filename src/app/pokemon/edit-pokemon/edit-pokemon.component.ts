import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h1 class="center">Editer le Pokemon</h1>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture" alt="">
    </p>

    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: ``
})
export class EditPokemonComponent {

  pokemon: Pokemon|undefined;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
  ){}
  
  ngOnInit(){
    const pokemonID: string|null = this.route.snapshot.paramMap.get('id'); //l'ID du pokemon concerné est recupéré par la route en snapshot
    if(pokemonID){
      this.pokemon = this.pokemonService.getPokemonByID(+pokemonID);
    } else {
      this.pokemon = undefined;
    }
  }
}
