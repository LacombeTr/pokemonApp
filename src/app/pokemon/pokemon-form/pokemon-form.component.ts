import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styles: ``
})

export class PokemonFormComponent implements OnInit{
  @Input() pokemon: Pokemon; // quand 'app-pokemon-form' est appellé il recquiert une propriété d'entrée de type 'Pokemon'
  typeList: string[];

  constructor(
    private router: Router,
    private pokemonservice:PokemonService
  ){}

  ngOnInit(){
    this.typeList = this.pokemonservice.getPokemonTypeList();// importer la liste des types de pokemon
  }

  hasType(type: string): boolean { //permet de precocher les types qu'a le pokemon
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string){ // permet de selectionner de nouveaux types pour le pokemon, reagi a un event
    const isChecked: boolean = ($event.target as HTMLInputElement).checked; // indique si l'utilisateur a coché ou non la checkbox

    if(isChecked){
      this.pokemon.types.push(type); //Si un type est coché alors on ajoute (on push) le type coché dans les type du pokemon
    } else{
      const indexType = this.pokemon.types.indexOf(type); // Je cherche l'index du type decoché
      this.pokemon.types.splice(indexType, 1) // Je retire le type (grace a la fonction splice) situé à l'index 'IndexType'
    }
  }

  onSubmit(){ // a l'envoi du formulaire
    console.log('Submitted')
    this.router.navigate(['/pokemon', this.pokemon.id])
  }

  isTypesValid(type: string): boolean{
    if(this.pokemon.types.length == 1 && this.hasType(type)){ // Si mon pokemon n'a qu'un type et qu'il sagit du type courant alors je fige cette checkbox
      return false
    }

    if(this.pokemon.types.length > 1 && !this.hasType(type)){// si mon pokemon a 2 types je bloque toutes les checkboxes sautf celles qui correspondent aux types du pokemon
      return false
    }

    return true

  }
}
