// let js = "amazing";
// if (js === "amazing") alert("Javascript is Fun");

// 40 + 8 + 23 - 10;
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");

// // declaring a variable
// let firstName = "Jonas";
// console.log(firstName);

// // let 5years = 5;

// true;
// console.log(true);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Gagan');

// javascriptIsFun = 'YES';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(typeof year);

// const ageJonas = 2037 - 1991;
// console.log(ageJonas);

// const ageSarah = 2037 - 2018;
// console.log(ageSarah);

// console.log(ageJonas, ageSarah);

// const firstName = 'Jonas';
// const job = 'techer';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ' ,a ' +  (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old teacher `;
// console.log(jonasNew);

// console.log('String with \n\n');
// console.log(`String with
// multiple lines`);


// const age = 15;
// const isOldenough =  age >= 18;

// if(age >= 18) {
//     console.log('Sarah can sart driving 🚘');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah cannot drive until ${yearsLeft} years`);
// }
// let century

// const birthYear = 1991;
// if(birthYear <=2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);


// console.log('I am ' + 23 );

// let n = '1' + 1;
// n = n -1;
// console.log(n);

// console.log(me);

// var me = "Gagan";
// //let job = "Programmer";
// //const year = 1994;

// // Functions

// console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

// function addDecl(a,b) {
//     return a + b;
// }

// const addExpr = function (a,b) {

//     return a + b;
    
// }

// const addArrow = (a,b) => a+ b;

//Example
// console.log(undefined);
// if(!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('All products deleted ');
// }

// 'use strict';

// console.log(this);

// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
    
// }

// calcAge(1991)

// var firstName = "Gagan";

// const Gagan = {
//     year: 1991,
//     firstName: 'Gagan',
//     calcAge : function(){
//         console.log(this);
//         console.log(2037 - this.year);

//         const isMillenial = function() {
//             console.log(this.year >=1991 && this.year <=1996);
//         }

//         isMillenial();
//     },

//     greet: ()=> console.log(`Hey ${this.firstName}`)
// }

// Gagan.greet();
// Gagan.calcAge();


// const addExpr= 


// let age = 30;

// let oldage = age;

// age = 31;

// console.log(age, oldage);

'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri']

const openingHours = 
{
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  ['']: {
    open: 0, // Open 24 hours
    close: 24,
  },
}

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //openingHours: openingHours,

  // Enhanced Object Literal
  openingHours,
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },



  orderDelivery({StarterIndex, mainIndex, time, address}) {
    console.log(StarterIndex, mainIndex, time, address );
    console.log(`Order received ${this.starterMenu}`);
  },

  orderPasta:(ing1, ing2, ing3)=> {
    console.log(`${ing1} ${ing2} ${ing3}`);
    
  },

  orderPizza:(ing1)=> { console.log(`${ing1}`);

  }
};

restaurant.orderDelivery({
    time: '22:33',
    address: 'Via',
    mainIndex: 2,
    StarterIndex: 3
})

console.log(restaurant);

// const arr = [7,8,9];

// const badNewArr = [1,2,arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1,2,...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Ginocci'];
// console.log(newMenu);

// //Copy
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables are arrays, strings, maps, sets but not objects

// const str = "Jonas";

// const letters = [...str, ' ', 's'];
// console.log(letters);

// console.log(...str);


// const ingredients = [prompt('Let\'s make pasta! Ingedient 1 ?'), prompt('Ingredient 2'), prompt('Ingredient 3')];

// console.log(ingredients);

//  restaurant.orderPasta()


 // Objects

//  const newRestaurant = {...restaurant, founder: 'Gzep'}
//  console.log(newRestaurant);

//  const restaurantCopy = {...restaurant};
//  restaurantCopy.name = 'rrrrr'
// //console.log(`${...str}`);





// const {name1, openingHours, categories}  = restaurant 
// //console.log(name1, openingHours, categories);

// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
//console.log(restaurantName, tags, hours);

// const {menu= [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// Mutating variables

// let a = 111;
// let b= 999;

// const obj = {a:23, b:27};

// {a,b}  = obj;
// console.log(a,b);

// // nested objects

//  const {fri: {open: o, close:c}} = openingHours;
//  console.log(o, c);

// const arr = [2,3,5];
// const a = arr[0];
// const b = arr[0];
// const c = arr[0];


// const [x,y,z] = arr;
// console.log(x,y,z);

// let [main, ,secondary] = restaurant.categories;
// console.log(main, secondary);


// [main, secondary] = [secondary, main] 
// console.log(main, secondary);


// const [starter, mainCourse] = restaurant.order(2,0);
// console.log(starter, mainCourse);

// const nested = [2,4, [5,6]];
// const [i,,[j,k]] = nested
// console.log(i,j,k);


// // Default values
//  const [ p,q,r=1] = [8,9];
//  console.log(p,q,r);

// const [a,b, ...others] = [1,2,3,4,5];
// console.log(a,b, others);

// const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// //Objects
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// // 2 Functions
// const add = function(...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for(let i=0; i< numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// }

// add(2,3);
// add(1,3,4,5,5,55,5);
// add(9,2,3,4,5);

// const x = [23,5,7];
// add(...x);
// console.log();

// console.log(3 || 'Jonas');

// // const [m,n] = [1,2];

// // [n,m] = [m,n]
// // console.log(a,b);

// const rest1 = {
//   name: 'Capri',
//   //numGuests: 20,
//   numGuests: 0

// }

// const rest2 = {
//   name : 'La Piazza',
//   owner: 'Giovanni ROSSI',
// }

// rest2.numGuests = rest1.numGuests ?? 10;

// rest2.owner = rest2.owner && 'Anonymous'
// rest1.numGuests ??= 10;
// console.log(rest1);
// console.log(rest2);

// for of loop

// const menu = [ ...restaurant.starterMenu, ...restaurant.mainMenu];

// for(const item of menu){
//   console.log(item);
// }

// for(const item of menu.entries()) {
//   console.log(item);
// }


// console.log([...menu.entries()]);


// for(const [i,el] of menu.entries()) {
//   console.log(`${i+1}: ${el}`);
// }

// const properties = Object.keys(openingHours)

// let openStr = `We are open on ${properties.length} days`;

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// // Property Values

// const values = Object.values(openingHours);

// //Entries object
// Object.entries(openingHours);

// const properties = Object.keys(openingHours);
// console.log(properties);

// console.log(`We are open on ${properties.length}`);

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// const values = Object.values(openingHours);
// console.log(values);

// // Entire Object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, {open,close}] of entries){
//   console.log(`On ${key} we open at ${open} and close at ${close} `);
// }

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, value] of game.scored.entries())
{
  console.log(`Goal ${i+1}: ${value}`);
}

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
console.log(average);
average = average/odds.length;
console.log(average);

// for (const [i,value] of game.odds) {
//   console.log(`Odds of ${game[i]}: ${value}`);
// }

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}