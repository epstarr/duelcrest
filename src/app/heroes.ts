//File containing hero data to be processed through the heroService service

//import Hero class
import { Hero } from './hero';

//define HEROES as class Hero array and define data in array
//Allow for export to other areas of the app
export const HEROES: Hero[] = [
	{ name: 'Abel', hp: 44, atk: 41, spd: 27, def: 25, res:25, weaponMight: 8 },
	{ name: 'Alfonse', hp: 43, atk: 51, spd: 25, def: 32, res:22, weaponMight: 16 },
	{ name: 'Anna', hp: 41, atk: 45, spd: 38, def: 22, res:28, weaponMight: 16 },
	{ name: 'Nino', hp: 33, atk: 46, spd: 36, def: 19, res:29, weaponMight: 13 },
	{ name: 'Serra', hp: 33, atk: 36, spd: 40, def: 18, res:33, weaponMight: 4 }

];