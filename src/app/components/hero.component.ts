import { Component } from '@angular/core';

@Component({
  selector: 'hero',
  template: `<h1>Hero: {{hero}}</h1>
  <select name="heroSelect" [(ngModel)]="hero">
  	<option *ngFor="let hero of heroes">{{hero}}</option>
  </select>`,
})
export class HeroComponent  { 
	hero: string; 
	heroes = ["Nino", "Abel", "Chrom"];

constructor() {
		this.hero = 'Choose a Hero';
	}
}