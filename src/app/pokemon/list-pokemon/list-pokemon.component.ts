import { Component, OnInit} from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html'
})

export class ListPokemonComponent implements OnInit{
  pokemonList: Pokemon[]

  constructor(
    private router: Router,
    private pokemonservice: PokemonService
  ){} // on importe le module 'Router'

  ngOnInit(){
    this.pokemonList = this.pokemonservice.getPokemonList(); //la liste des pokemons est donnée par le service
  }

  goToPokemon(pokemon: Pokemon){                   // On créé un methode qui va nous permettre de rediriger vers n'importe quelle    infos en fonction de l'ID du pokemon, on doit donc passer un objet pokemon a la methode
    this.router.navigate(['/pokemon', pokemon.id]) // on utilise la propriété 'navigate' du module 'Router' aui redirigera vers l'url '/pokemon'+ la valeur de l'attribut ID de l'objet Pokemon passé à la méthode
  }
}