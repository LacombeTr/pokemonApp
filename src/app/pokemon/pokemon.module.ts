import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { Pokemon } from './pokemon';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonService } from './pokemon.service';

const pokemonRoutes: Routes = [ //declarer les routes les plus specifique en premier car c'est lu du haut vers le bas
  { path: 'pokemon', component: ListPokemonComponent}, //liste pokemon
  { path: 'pokemon/:id', component: DetailPokemonComponent}, //detail des pokemons
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe, //on l'utilise aue ici dans le cadre des pokemons
  ],
  imports: [
    CommonModule, // module qui conteint des logiaues telles que ngIf et ngFor
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService] // Indique les services qui fournissent ce module
})
export class PokemonModule {}
