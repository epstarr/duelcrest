import { Component } from '@angular/core';
export class Hero {
	name: string;
	hp: number;
}

@Component({
  selector: 'my-app',
  template: `<h1>Choose Your Heroes</h1>
  <div *ngIf="selectedHero">
  <h2>Hero: {{selectedHero.name}}</h2>
  <p>HP: {{selectedHero.hp}}</p>
  </div>
  <select name="heroSelect" [(ngModel)]="selectedHero">
  	<option *ngFor="let h of heroes" [ngValue]="h">{{h.name}}</option>
  </select>`,
})
export class AppComponent  { 
	hero: string; 
	heroes = HEROES;
	selectedHero: Hero;

constructor() {

	}
}
const HEROES: Hero[] = [
	{name: 'Chrom', hp: 34},
	{name: 'Abel', hp: 44},
	{name: 'Lucina', hp: 12}
];


