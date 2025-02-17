'use strict';

let x = 10;
console.log(x);

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  numPassengers = numPassengers || 1;
  price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking();
console.log(typeof undefined);
console.log(typeof null);

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmidt',
  passport: '29898982',
};

const checkin = passenger => {
  passenger.name = 'Mr. ' + passenger.name;
};

checkin(jonas);
console.log(jonas);

console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.randon;
};

console.log(typeof newPassport);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperWord = function (str) {
  const [first, ...others] = str.split(' ');
  console.log(typeof first);
  console.log(...others);
  return [first.toUpperCase(), ...others].join(' ');
};

console.log(upperWord('my name is Gagan'));
console.log(oneWord('my name is Gagan'));

console.log(`${'gagan'}`);

const transformer = function (str, fn) {
  console.log(` tranformed string : ${fn(str)}`);
  console.log(` transformed by ${fn.name}`);
};

transformer('js is best', upperWord);

const hight5 = function () {
  console.log('Hi');
};

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greet = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greet('Hey');
greeter('gagan');
greet('Hello')('Dave');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}`, name });
  },
};

lufthansa.book(239, 'Gagan Singla');
lufthansa.book(635, 'ABC DEF');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
console.log(lufthansa.book);

//book(23, 'Srah Williams');
//book.call(eurowings, 23, 'Sarah');
console.log(eurowings);

const flightData = [583, 'George Cooper'];
book.apply(eurowings, flightData);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookEW(234, 'Steven Williams');
bookLH(235, 'Gagan');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.btn-country')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(10, 100));

const addVAT = addTax.bind(null, 0.23);

const addTaxrate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
}; // Does not work

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');

// // const btn = document.querySelector('.btn-country');
// // const countriesContainer = document.querySelector('.countries');

// // ///////////////////////////////////////

// // const renderCountry = (data, className='') => {
// //   const html = `
// //     <article class="country ${className}">
// //           <img class="country__img" src="${data.flag}" />
// //           <div class="country__data">
// //             <h3 class="country__name">${data.name}</h3>
// //             <h4 class="country__region">${data.region}</h4>
// //             <p class="country__row"><span>👫</span>${data.population}</p>
// //             <p class="country__row"><span>🗣️</span>LANG</p>
// //             <p class="country__row"><span>💰</span>CUR</p>
// //           </div>
// //         </article>`;

// //   countriesContainer.insertAdjacentHTML('beforeend', html);
// // };

// // // const getCountry = country => {
// // //   const request = new XMLHttpRequest();
// // //   request.open(
// // //     'GET',
// // //     `https://countries-api-836d.onrender.com/countries/name/${country}`
// // //   );
// // //   request.send();

// // //   request.addEventListener('load', function (params) {
// // //     console.log(this.responseText);

// // //     const [data] = JSON.parse(this.responseText);
// // //     console.log(data);
// // //     renderCountry(data)

// // //     // Get neigbor country
// // //     const [neighbors] = data.borders;

// // //     const request2 = new XMLHttpRequest();
// // //   request2.open(
// // //     'GET',
// // //     `https://countries-api-836d.onrender.com/countries/alpha/${neighbors}`
// // //   );
// // //   request2.send();

// // //   request2.addEventListener('load', function() {
// // //     const data2 = JSON.parse(this.responseText);
// // //     console.log(data2);

// // //     renderCountry(data2, 'neighbour')
// // //   })

// // //   });
// // // };

// // // getCountry('Italy');

// // // const getCountryData = function(country){
// // // fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
// // // .then(res => {
// // //   console.log(res.json);
// // // //return res.json()
// // // })
// // // .then(data => {
// // //     renderCountry(data[0]);
// // //     const neighbour = data[0].borders[0];

// // //     return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`)
// // // })
// // //     .then(res2 => res2.json())
// // //     .then(data2 => renderCountry(data2, 'neighbour'))
// // //     .catch(err => alert(err))

// // // };

// // // btn.addEventListener('click', () => {
// // //   getCountryData('usa');
// // // })

// // // // Promise.resolve({"message":"Gagan is good"}).then(response => console.log(response.json));

// // // NavigationPreloadManager.getCountryData

// // (async (name = prompt('Enter Country name')) => {
// //   //const countryName = name;
// //   const response = await fetch(`https://countries-api-836d.onrender.com/countries/name/${name}`)
// //   console.log(response);
// //   console.log(response.ok);

// //   try {

// //     const data = await response.json()
// //     console.log(data[1].population);

// //   }catch(error){
// //     console.error(error)
// //   }
// // })()

// // //getCountryData('portugal', `https://countries-api-836d.onrender.com/countries/name/portugal`)

// // var me = "gagan";
// // let job = "teacher"

// // if(!numProducts) deleteShoppingCart();

// // var numProducts = 10

// // function deleteShoppingCart() {
// //   console.log('All products are deleted');
// // }

// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// const commonFoods = italianFoods.intersection(mexicanFoods);
// console.log(commonFoods);

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function (obj) {
//     console.log(obj);
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your ingredients ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIng, ...OtherIng) {
//     console.log(mainIng, OtherIng);
//   },
// };

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'MapleShade',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// // const arr = [2,3,4];

// // const [x,y,z] = arr;

// // console.log(x);

// // let [first, _ , third] = restaurant.categories;
// // console.log(typeof(first));
// // // const main2 = first;
// // // console.log(main2);
// //  let [first2, secondary] = [third, first];
// // console.log(first);

// console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// const [i, _, [j, k]] = nested;

// console.log(i, j);

// // Default values
// const [p = 1, q, r = 1] = [8, 9];
// //console.log(a);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(tags);

// // Join 2 arrays
// const newMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(newMenu);

// // Iterables: arrays, maps, strings, maps, sets

// // REST as params
// const addIngredients = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// // SPREAD as arguments
// const x = [1, 2, 3, 4, 5, 6];
// addIngredients(...x);

// restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');

// restaurant.orderPizza('mush');

// const orderedSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pizza']);

// console.log(orderedSet);

// console.log(new Set('Jonas'));

// console.log(orderedSet.size);
// console.log(orderedSet.has('Bread'));

// orderedSet.add('Garlic Bread');
// orderedSet.delete('Risotto');
// //orderedSet.clear();
// console.log(orderedSet);

// for (const order of orderedSet) {
//   console.log(order);
// }

// //Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log([...new Set([...italianFoods, ...mexicanFoods])]);

// const rest = new Map();
// rest.set('name', 'Classico');
// rest.set(1, 'Italy');
// rest.set(2, 'Portugal');

// console.log(rest);

// const arr3 = [1,2,3,4];
// for(const key of arr3.values()){
//   console.log(key);
// }

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(airline.slice(4,7));

// console.log(airline.slice(-2));

// const checkMiddleSeat = function(seat) {
//   const s = seat.slice(-1);

//   if(s==='B' || s === 'E')
//     console.log(`You go the middle seat`);
//   else console.log('You got lucky');

// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');

// console.log(airline.toLowerCase());

// const passenger = 'jOnas';
// const passengerLower = passenger.toLowerCase();
// const loginEmail = '  Hello@Jonas.IO  \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const priceGB = '288,97W';
// const priceUS = priceGB.replace('W', '$');
// console.log(priceUS);

// const plane = 'A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('Air'));

// // split()

// console.log(`a+very`.split('+'));
// console.log('Jonas Schedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schedtmann'.split(' ');
// const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// // const passenger = 'jessica ann smih davis';

// // const cpaializeName =

// // padding
// const message = 'Go to 23!';

// console.log(message.padStart(25, '+'));

// const str = String(12345678);
// const last = str.slice(-4);
// console.log(last.padStart(str.length, '*'));

// const oneWord = function(str) {
//   return str.replace(/ /g, '').toLowerCase();
// }
