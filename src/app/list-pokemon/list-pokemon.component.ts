import { Component} from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html'
})

export class ListPokemonComponent{
  pokemonList: Pokemon[] = POKEMONS; //on dit que la propriété 'pokemonList' et de type 'Pokemon' est égale a la variable importée 'POKEMONS'
                                     //et que elle ne peut être que de type 'Pokemon'
  
  constructor(private router: Router){} // on importe le module 'Router'

  goToPokemon(pokemon: Pokemon){                   // On créé un methode qui va nous permettre de rediriger vers n'importe quelle    infos en fonction de l'ID du pokemon, on doit donc passer un objet pokemon a la methode
    this.router.navigate(['/pokemon', pokemon.id]) // on utilise la propriété 'navigate' du module 'Router' aui redirigera vers l'url '/pokemon'+ la valeur de l'attribut ID de l'objet Pokemon passé à la méthode
  }
}