import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'hero',
  templateUrl: 'app/templates/hero.html',
  styleUrls: ['app/styles/hero.css'],
  providers: [ HeroService ]
})

//Define class HeroComponent and declare a service on init
export class HeroComponent implements OnInit { 
	
	//define heroes property as Hero class
	heroes:  Hero[];

	//Inject HeroService as heroSerivce private variable
	constructor (
	private heroService: HeroService
	) {};

	//Set heroes property to equal heroes gathered from getHeroes service
	getHeroes(): void {
		this.heroes = this.heroService.getHeroes();
	}

	//Call getHeroes on app init
	ngOnInit(): void {
		this.getHeroes();
	};
}