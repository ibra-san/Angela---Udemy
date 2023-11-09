import genSillyName from "sillyname";
 //const genSillyName = require("sillyname"); 
const name = genSillyName(); 

console.log(`The generated name is ${name}`);


// Challenge --- using superheros npm package
import genSuperHeroName from "superheroes"; 
const superHeroName = genSuperHeroName.random();
console.log(`The generated name is ${superHeroName}`);

