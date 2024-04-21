import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

const routes: Routes = [ //declarer les routes les plus specifique en premier car c'est lu du haut vers le bas
  { path: 'pokemon', component: ListPokemonComponent}, //liste pokemon
  { path: 'pokemon/:id', component: DetailPokemonComponent}, //detail des pokemons
  { path: '', redirectTo: 'pokemon', pathMatch: 'full'} //root (redirige vers la liste Pokemon )
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
