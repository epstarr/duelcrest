import { Component } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'hero',
  templateUrl: 'app/templates/hero.html'
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

