import { Component } from '@angular/core';

@Component({
  selector: 'hero',
  template: `<h1>Hero: {{hero}}</h1>
  <select name="heroSelect" ng>
  	<option *ngFor="let hero of heroes">{{hero}}</option>
  </select>`,
})
export class HeroComponent  { 
	heroName: string; 
	heroes = ["Nino", "Abel", "Chrom"];

constructor() {
		this.heroName = 'Choose a Hero';
	}
}