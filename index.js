const math = require('./math');
const { add, subtract } = math;
//require('./batman');
//require('./superman');
//const superHero = require('./superHero');

/*console.log(superHero.getName());
superHero.setName('Superman');
console.log(superHero.getName());

const newSuperHero = require('./superHero');
console.log(newSuperHero.getName()) //Superman because of caching

/*const add = require('./add');

const sum = add(1, 2);
const sum2 = add(2, 3);
console.log(sum);
console.log(sum2);*/

console.log(math.add(2, 3));
console.log(math.subtract(2, 3));
console.log(add(2, 3));
console.log(subtract(2, 3));