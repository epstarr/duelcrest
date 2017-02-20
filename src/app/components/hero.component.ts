import { Component } from '@angular/core';
import { Hero } from '../hero';
import {HeroService} from '../services/hero.service';
import {OnInit} from '@angular/core';


@Component({
  selector: 'hero',
  templateUrl: 'app/templates/hero.html',
  styleUrls: ['app/styles/hero.css'],
  providers: [HeroService]
})
export class HeroComponent implements OnInit { 
	ngOnInit(): void {
		this.getHeroes();
	}
	//set heroes property equal to HEROES array data
	heroes:  Hero[];
	//declare selectedHero property to match Hero class from ../hero
	selectedHero1: Hero;
	constructor (
	private heroService: HeroService) {}
	getHeroes(): void {
		this.heroes = this.heroService.getHeroes();
	}
}
//Array of her data used for HeroComponent

