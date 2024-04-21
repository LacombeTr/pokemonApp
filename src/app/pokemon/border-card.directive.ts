import { Directive, ElementRef, HostListener, Input, input } from '@angular/core';

// Une directive qui permet de modifier les cartes et leur ajouter un outline on hover

@Directive({
  selector: '[pkmnBorderCard]' // Crochets car directive d'attribut
})

export class BorderCardDirective {

  private initialColor: string = 'rgba(255, 255, 255, 0)'
  private defaultColor: string = '#d02929';
  private defaultHeight: number = 250;

  constructor(private el:ElementRef) { //ElementRef est du core angular, permnet de faire une ref vers un element du DOM
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input('pkmnBorderCard') borderColor: string; //alias

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor  || this.defaultColor); //soit la couleur definie par l'utilisqteur soit couleur par defaut
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
  }

  private setBorder(color: string){
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  };

  private setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`;
  }
}
