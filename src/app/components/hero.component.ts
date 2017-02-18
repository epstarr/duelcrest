import { Component } from '@angular/core';
export class Hero {
	id: number;
	name: string;
}

@Component({
  selector: 'hero',
  template: `<h1>Choose Your Heroes</h1>

  <select name="heroSelect" [(ngModel)]="hero">
  	<option *ngFor="let hero of heroes">{{hero.name}}</option>
  </select>`,
})
export class HeroComponent  { 
	hero: string; 
	heroes = HEROES;


constructor() {
		this.hero = 'Choose a Hero';
	}
}
const HEROES: Hero[] = [
	{id: 1, name: 'Chrom'},
	{id: 2, name: 'Abel'},
	{id: 3, name: 'Lucina'}
];


