//Allow other parts of the app to obtain list of hero data
import  { Injectable } from '@angular/core';
//import Hero class
import { Hero } from '../hero';
import { HeroComplete } from '../hero-complete';
import { HeroWeapons } from '../heroweapons';
import { HeroAssists } from '../heroassists';
import { HeroSpecials } from '../herospecials';
//import HEROES array data
import { HEROES } from '../heroes';
import { HEROESCOM } from '../heroes-complete';
import { WEAPONS } from '../weapons';
import { HEROSASSIST } from '../assists';
import { HEROSPECIALS } from '../specials';

//Allow for the injecting of other dependencies into service
@Injectable()
export class HeroService {

	//Define the getHeroes service as class Hero and return the list of hero data to what calls getHeroes
	getHeroes(): Hero[] {
		return HEROES;
	}

	getHeroesComplete(): HeroComplete[] {
		return HEROESCOM; 
	}

	getWeapons(): HeroWeapons[] {
		return WEAPONS;
	}

	getAssists(): HeroAssists[] {
		return HEROSASSIST;
	}
	getSpecials(): HeroSpecials[] {
		return HEROSPECIALS;
	}

}
