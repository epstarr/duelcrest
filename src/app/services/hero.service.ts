//Allow other parts of the app to obtain list of hero data
import  { Injectable } from '@angular/core';
//import Hero class
import { Hero } from '../hero';
import { HeroComplete } from '../hero-complete';
//import HEROES array data
import { HEROES } from '../heroes';
import { HEROESCOM } from '../heroes-complete';

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

}
