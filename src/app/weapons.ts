//File containing hero data to be processed through the heroService service

//import Hero class
import { HeroWeapons } from './heroweapons';

//define HEROES as class Hero array and define data in array
//Allow for export to other areas of the app
export const WEAPONS: HeroWeapons[] = [
{id:1,name:"Absorb",mods:[0,4,0,0,0]},
{id:2,name:"Armads",mods:[0,16,0,0,0]},
{id:3,name:"Armorslayer",mods:[0,8,0,0,0]},
{id:4,name:"Armorslayer+",mods:[0,12,0,0,0]},
{id:5,name:"Assassin's Bow",mods:[0,7,0,0,0]},
{id:6,name:"Assassin's Bow+",mods:[0,11,0,0,0]},
{id:7,name:"Assault",mods:[0,10,0,0,0]},
{id:8,name:"Aura",mods:[0,14,0,0,0]},
{id:9,name:"Binding Blade",mods:[0,16,0,0,0]},
{id:10,name:"Blárblade",mods:[0,9,0,0,0]},
{id:11,name:"Blárblade +",mods:[0,13,0,0,0]},
{id:12,name:"Blárraven",mods:[0,7,0,0,0]},
{id:13,name:"Blárraven+",mods:[0,11,0,0,0]},
{id:14,name:"Blárwolf",mods:[0,6,0,0,0]},
{id:15,name:"Blárwolf+",mods:[0,10,0,0,0]},
{id:16,name:"Bolganone",mods:[0,9,0,0,0]},
{id:17,name:"Bolganone+",mods:[0,13,0,0,0]},
{id:18,name:"Brave Axe",mods:[0,5,-5,0,0]},
{id:19,name:"Brave Axe+",mods:[0,8,-5,0,0]},
{id:20,name:"Brave Bow",mods:[0,4,-5,0,0]},
{id:21,name:"Brave Bow+",mods:[0,7,-5,0,0]},
{id:22,name:"Brave Lance",mods:[0,5,-5,0,0]},
{id:23,name:"Brave Lance+",mods:[0,8,-5,0,0]},
{id:24,name:"Brave Sword",mods:[0,5,-5,0,0]},
{id:25,name:"Brave Sword+",mods:[0,8,-5,0,0]},
{id:26,name:"Brynhildr",mods:[0,14,0,0,0]},
{id:27,name:"Cymbeline",mods:[0,14,0,0,0]},
{id:28,name:"Dark Breath",mods:[0,9,0,0,0]},
{id:29,name:"Dark Breath+",mods:[0,13,0,0,0]},
{id:30,name:"Deathly Dagger",mods:[0,11,0,0,0]},
{id:31,name:"Dire Thunder",mods:[0,9,-5,0,0]},
{id:32,name:"Durandal",mods:[0,16,0,0,0]},
{id:33,name:"Elfire",mods:[0,6,0,0,0]},
{id:34,name:"Elthunder",mods:[0,6,0,0,0]},
{id:35,name:"Elwind",mods:[0,6,0,0,0]},
{id:36,name:"Emerald Axe",mods:[0,8,0,0,0]},
{id:37,name:"Emerald Axe+",mods:[0,12,0,0,0]},
{id:38,name:"Excalibur",mods:[0,14,0,0,0]},
{id:39,name:"Falchion",mods:[0,16,0,0,0]},
{id:40,name:"Fear",mods:[0,5,0,0,0]},
{id:41,name:"Fenrir",mods:[0,9,0,0,0]},
{id:42,name:"Fenrir+",mods:[0,13,0,0,0]},
{id:43,name:"Fensalir",mods:[0,16,0,0,0]},
{id:44,name:"Fire",mods:[0,4,0,0,0]},
{id:45,name:"Fire Breath",mods:[0,6,0,0,0]},
{id:46,name:"Fire Breath+",mods:[0,8,0,0,0]},
{id:47,name:"Flametongue",mods:[0,11,0,0,0]},
{id:48,name:"Flametongue+",mods:[0,15,0,0,0]},
{id:49,name:"Flux",mods:[0,4,0,0,0]},
{id:50,name:"Fólkvangr",mods:[0,16,0,0,0]},
{id:51,name:"Fujin Yumi",mods:[0,14,0,0,0]},
{id:52,name:"Gravity",mods:[0,6,0,0,0]},
{id:53,name:"Gronnblade",mods:[0,9,0,0,0]},
{id:54,name:"Gronnblade+",mods:[0,13,0,0,0]},
{id:55,name:"Gronnraven",mods:[0,7,0,0,0]},
{id:56,name:"Gronnraven+",mods:[0,11,0,0,0]},
{id:57,name:"Gronnwolf",mods:[0,6,0,0,0]},
{id:58,name:"Gronnwolf+",mods:[0,10,0,0,0]},
{id:59,name:"Hammer",mods:[0,8,0,0,0]},
{id:60,name:"Hammer+",mods:[0,12,0,0,0]},
{id:61,name:"Hauteclere",mods:[0,16,0,0,0]},
{id:62,name:"Heavy Spear",mods:[0,8,0,0,0]},
{id:63,name:"Heavy Spear+",mods:[0,12,0,0,0]},
{id:64,name:"Iron Axe",mods:[0,6,0,0,0]},
{id:65,name:"Iron Bow",mods:[0,4,0,0,0]},
{id:66,name:"Iron Dagger",mods:[0,3,0,0,0]},
{id:67,name:"Iron Lance",mods:[0,6,0,0,0]},
{id:68,name:"Iron Sword",mods:[0,6,0,0,0]},
{id:69,name:"Killer Axe",mods:[0,7,0,0,0]},
{id:70,name:"Killer Axe+",mods:[0,11,0,0,0]},
{id:71,name:"Killer Bow",mods:[0,5,0,0,0]},
{id:72,name:"Killer Bow+",mods:[0,9,0,0,0]},
{id:73,name:"Killer Lance",mods:[0,7,0,0,0]},
{id:74,name:"Killer Lance+",mods:[0,11,0,0,0]},
{id:75,name:"Killing Edge",mods:[0,7,0,0,0]},
{id:76,name:"Killing Edge+",mods:[0,11,0,0,0]},
{id:77,name:"Light Breath",mods:[0,9,0,0,0]},
{id:78,name:"Light Breath",mods:[0,9,0,0,0]},
{id:79,name:"Light Breath+",mods:[0,13,0,0,0]},
{id:80,name:"Light Breath+",mods:[0,13,0,0,0]},
{id:81,name:"Lightning Breath",mods:[0,7,0,0,0]},
{id:82,name:"Lightning Breath",mods:[0,7,0,0,0]},
{id:83,name:"Lightning Breath+",mods:[0,11,0,0,0]},
{id:84,name:"Lightning Breath+",mods:[0,11,0,0,0]},
{id:85,name:"Mystletainn",mods:[0,16,0,0,0]},
{id:86,name:"Naga",mods:[0,14,0,0,0]},
{id:87,name:"Nóatún",mods:[0,16,0,0,0]},
{id:88,name:"Pain",mods:[0,3,0,0,0]},
{id:89,name:"Panic",mods:[0,7,0,0,0]},
{id:90,name:"Parthia",mods:[0,14,0,0,0]},
{id:91,name:"Poison Dagger",mods:[0,2,0,0,0]},
{id:92,name:"Poison Dagger+",mods:[0,5,0,0,0]},
{id:93,name:"Raijinto",mods:[0,16,0,0,0]},
{id:94,name:"Rauðrblade",mods:[0,9,0,0,0]},
{id:95,name:"Rauðrblade+",mods:[0,13,0,0,0]},
{id:96,name:"Rauðrraven",mods:[0,7,0,0,0]},
{id:97,name:"Rauðrraven+",mods:[0,11,0,0,0]},
{id:98,name:"Rauðrwolf",mods:[0,6,0,0,0]},
{id:99,name:"Rauðrwolf+",mods:[0,10,0,0,0]},
{id:100,name:"Rexcalibur",mods:[0,9,0,0,0]},
{id:101,name:"Rogue Dagger",mods:[0,4,0,0,0]},
{id:102,name:"Rogue Dagger+",mods:[0,7,0,0,0]},
{id:103,name:"Ruby Sword",mods:[0,8,0,0,0]},
{id:104,name:"Ruby Sword+",mods:[0,12,0,0,0]},
{id:105,name:"Ruin",mods:[0,6,0,0,0]},
{id:106,name:"Sapphire Lance",mods:[0,8,0,0,0]},
{id:107,name:"Sapphire Lance+",mods:[0,12,0,0,0]},
{id:108,name:"Sieglinde",mods:[0,16,0,0,0]},
{id:109,name:"Siegmund",mods:[0,16,0,0,0]},
{id:110,name:"Silver Axe",mods:[0,11,0,0,0]},
{id:111,name:"Silver Axe+",mods:[0,15,0,0,0]},
{id:112,name:"Silver Bow",mods:[0,9,0,0,0]},
{id:113,name:"Silver Bow+",mods:[0,13,0,0,0]},
{id:114,name:"Silver Dagger",mods:[0,7,0,0,0]},
{id:115,name:"Silver Dagger+",mods:[0,10,0,0,0]},
{id:116,name:"Silver Lance",mods:[0,11,0,0,0]},
{id:117,name:"Silver Lance+",mods:[0,15,0,0,0]},
{id:118,name:"Silver Sword",mods:[0,11,0,0,0]},
{id:119,name:"Silver Sword+",mods:[0,15,0,0,0]},
{id:120,name:"Slow",mods:[0,5,0,0,0]},
{id:121,name:"Smoke Dagger",mods:[0,6,0,0,0]},
{id:122,name:"Smoke Dagger+",mods:[0,9,0,0,0]},
{id:123,name:"Sol Katti",mods:[0,16,0,0,0]},
{id:124,name:"Steel Axe",mods:[0,8,0,0,0]},
{id:125,name:"Steel Bow",mods:[0,6,0,0,0]},
{id:126,name:"Steel Dagger",mods:[0,5,0,0,0]},
{id:127,name:"Steel Lance",mods:[0,8,0,0,0]},
{id:128,name:"Steel Sword",mods:[0,8,0,0,0]},
{id:129,name:"Thoron",mods:[0,9,0,0,0]},
{id:130,name:"Thunder",mods:[0,4,0,0,0]},
{id:131,name:"Tyrfing",mods:[0,16,0,0,0]},
{id:132,name:"Wind",mods:[0,4,0,0,0]},
{id:133,name:"Wo Dao",mods:[0,9,0,0,0]},
{id:134,name:"Wo Dao+",mods:[0,13,0,0,0]},
{id:135,name:"Yato",mods:[0,16,0,0,0]}
];