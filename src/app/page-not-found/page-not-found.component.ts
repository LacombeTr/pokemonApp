import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `<h1 class="center">Page Not Found</h1>
             <a routerLink="/pokemon" class="center">Revenir à l'accueil</a>`, // l'attribut 'ruterLink' est natif de Angular et permet de passer directement une route 
})
export class PageNotFoundComponent {}
