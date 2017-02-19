import { Component } from '@angular/core';
export class Hero {
	name: string;
	hp: number;
	atk: number;
	spd: number;
	def: number;
	res: number;
	weaponMight: number;
}


@Component({
  selector: 'hero',
  template: `<h1>Choose Your Heroes</h1>
  <div *ngIf="selectedHero">
  <img src="../images/Icon_Portrait_{{selectedHero.name}}.png" />
  <h2>Hero: {{selectedHero.name}}</h2>
  <p>HP: {{selectedHero.hp}}<br/>
  Atk: {{selectedHero.atk + selectedHero.weaponMight}}</p>
  </div>
  <select name="heroSelect" [(ngModel)]="selectedHero">
  	<option *ngFor="let h of heroes" [ngValue]="h">{{h.name}}</option>
  </select>
  <h3>Full selectedHero JSON Data</h3>
  <p>{{selectedHero | json}}</p>`,
})
export class HeroComponent  { 
	hero: string; 
	heroes = HEROES;
	selectedHero: Hero;


constructor() {

	}
}
const HEROES: Hero[] = [
	{name: 'Abel', hp: 44, atk: 41, spd: 27, def: 25, res:25, weaponMight: 8},
	{name: 'Lucina', hp: 44, atk: 41, spd: 27, def: 25, res:25, weaponMight: 33}
];

