import { Directive, ElementRef, HostListener, input } from '@angular/core';
import { getPokemonColor } from './pokemon.model';

@Directive({
  // selector CSS pour cibler l element
  selector: '[appPokemonBorder]',
  standalone: true
})
export class PokemonBorderDirective {
  // oblige tous les templates utilisant la directive a fournir l input
  pokemonType = input.required<string>();
  
  private initialColor: string;

  constructor(private el: ElementRef) {
    this.initialColor = this.el.nativeElement.style.borderColor;
    this.el.nativeElement.style.borderWidth = '2px';
   }

   @HostListener('mouseenter') onMouseEnter() {
    const color = getPokemonColor(this.pokemonType());
    this.setBorder(color)
   }

   @HostListener('mouseleave') onMouseLeave() {
    const color = this.initialColor;
    this.setBorder(color)
   }

   private setBorder(color: string){
    this.el.nativeElement.style.borderColor = color
   }

  //  private getBorderColor() {
  //   switch (this.pokemonType()) {
  //     case 'Feu':
  //       return '#EF5350';
  //     case 'Eau':
  //       return '#42A5F5';
  //     case 'Plante':
  //       return '#66BB6A';
  //     case 'Insecte':
  //       return '#8d6e63';
  //     case 'Vol':
  //       return '#90CAF9';
  //     case 'Poison':
  //       return '#b388ff';
  //     case 'Fée':
  //       return '#f8bbd0';
  //     case 'Electrik':
  //       return '#f4ff81';
  //     default:
  //       return '#303030';
  //   }
  // }

}
