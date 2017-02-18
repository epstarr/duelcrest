import { Component } from '@angular/core';

@Component({
  selector: 'hero',
  template: `<h1>Hero: {{heroName}}</h1>
  <select name="heroSelect" [(ngModel)]="heroName">
  	<option value="Abel">Abel</option>
  	<option value="Nikki">Nikki</option>
  </select>`,
})
export class HeroComponent  { 
	heroName: string; 


constructor() {
		this.heroName = 'Choose a Hero';
	}
}