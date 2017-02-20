//File containing hero data to be processed through the heroService service

//import Hero class
import { Hero } from './hero';

//define HEROES as class Hero array and define data in array
//Allow for export to other areas of the app
export const HEROES: Hero[] = [
	{ name: 'Abel', hp: 44, atk: 41, spd: 27, def: 25, res:25, weaponMight: 8 },
	{ name: 'Lucina', hp: 44, atk: 41, spd: 27, def: 25, res:25, weaponMight: 33 }
];