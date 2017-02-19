import { Component } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'hero',
  template: `
  <div *ngIf="selectedHero">  <!-- Show content only if selectedHero holds data -->
  <img src="../images/Icon_Portrait_{{selectedHero.name}}.png" />
  <h2>Hero: {{selectedHero.name}}</h2>
  <p>HP: {{selectedHero.hp}}<br/>
  Atk: {{selectedHero.atk + selectedHero.weaponMight}}</p>
  </div>
  <select name="heroSelect" [(ngModel)]="selectedHero"> <!-- Take value from selected option and put it in interpolated string selectedHero-->
  	<option *ngFor="let h of heroes" [ngValue]="h">{{h.name}}</option> <!-- For each hero in HEROES, show hero name in option and send the objects to the ngModel -->
  </select>
  <h3>Full selectedHero JSON Data</h3>
  <p>{{selectedHero | json}}</p>`,
})
export class HeroComponent  { 
	//set heroes property equal to HEROES array data
	heroes = HEROES;
	//declare selectedHero property to match Hero class from ../hero
	selectedHero: Hero;

}
//Array of her data used for HeroComponent
const HEROES: Hero[] = [
	{name: 'Abel', hp: 44, atk: 41, spd: 27, def: 25, res:25, weaponMight: 8},
	{name: 'Lucina', hp: 44, atk: 41, spd: 27, def: 25, res:25, weaponMight: 33}
];

