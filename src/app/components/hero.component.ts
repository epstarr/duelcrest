import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroComplete } from '../hero-complete';
import { HeroWeapons } from '../heroweapons';
import { HeroAssists } from '../heroassists';
import { HeroSpecials } from '../herospecials';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'hero',
  templateUrl: '../templates/hero.html',
  styleUrls: ['../styles/hero.css'],
  providers: [ HeroService ]
})

//Define class HeroComponent and declare a service on init
export class HeroComponent implements OnInit { 
	
	//define heroes property as Hero class
	heroes:  Hero[];
	heroesComplete: HeroComplete[];
	weapons: HeroWeapons[];
	assists: HeroAssists[];
	specials: HeroSpecials[];

	//Inject HeroService as heroSerivce private variable
	constructor (
	private heroService: HeroService
	) {};

	//Set heroes property to equal heroes gathered from getHeroes service
	getHeroes(): void {
		this.heroes = this.heroService.getHeroes();
	}
	getHeroesComplete(): void {
		this.heroesComplete = this.heroService.getHeroesComplete();
	}
	getWeapons(): void {
		this.weapons = this.heroService.getWeapons();
	}
	getAssists(): void {
		this.assists = this.heroService.getAssists();
	}
	getSpecials(): void {
		this.specials = this.heroService.getSpecials();
	}

	//Call getHeroes on app init
	ngOnInit(): void {
		this.getHeroes();
		this.getHeroesComplete();
		this.getWeapons();
		this.getAssists();
		this.getSpecials();
	};
}