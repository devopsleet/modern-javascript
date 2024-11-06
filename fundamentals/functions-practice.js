// 'use strict';

// const bookings = [];

// const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {

//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }

//     console.log(booking);
//     bookings.push(booking)
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 8);

// const flight = 'LH234';
// const jonas = {
//     name : 'Gagan',
//     passport: '82e7832322'
// }

// const checkIn = function(flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === '82e7832322') {
//         alert('Check in')
//     } else {
//         alert('Wrong Passport')
//     }
// }

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 100000000)
// // }

// const orderSet = new Set(["Pasta", "Pizza", "Pizza", "Rissoto", "Pasta"]);
// console.log(orderSet);

// console.log(new Set("gagan"));

// console.log(new Set());

// console.log(orderSet.size);
// console.log(orderSet.has("Pizza"));
// console.log(orderSet.has("Bread"));
// console.log(orderSet.add("Garlic"));
// orderSet.delete("risotto");
// console.log(orderSet);

// //orderSet.clear();

// for (const order of orderSet) console.log(order);

// // remove duplicate values

// const staff = ["Waiter", "Cheff", "Manager", "Waiter"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// const rest = new Map();
// rest.set("name", "Classico");
// rest.set(1, "Firenze");
// //console.log(rest.set(2, "Lisbon"));

// rest
//   .set("catgeories", ["Italian", "Pizzaria"])
//   .set("open", 11)
//   .set(true, "Open")
//   .set("test", "test");

// classrest.get('name');

// const time = 21;
// console.log(rest);
// //console.log(rest.get(time > rest.get('open') && time < (rest.get('closed'))));
// console.log(rest.size);
// // console.log(rest.clear());

// rest.set([1, 2], "Test");

// rest.get;

// const question = new Map([
//   ["question", "Best programming language"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "Javascript"],
//   ['true', 'Correct 🍷']
// ]);

// console.log(question);

// openingHours = {
//     'open': 12
// }

// console.log(Object.entries(openingHours));

// const arr1 = ['a', 'b'];
// for (const [i,j] of arr1.entries()) {
//     console.log(i);
// }

// const newArr = ['a','b', 'c'];
// console.log(newArr);
// newArr.push('d');
// console.log(newArr);

// const airline = "TAP Air Portugal";
// const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);
// console.log("BGTGTGB"[2]);

// console.log(airline.length);

// console.log(airline.lastIndexOf("r"));

// console.log(airline.indexOf("portugal"));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));
// console.log(airline.slice(-2));
// console.log(airline.slice(-2));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// console.log(new String("jonas"));
// console.log(typeof new String("jonas"));

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = "jONAS";
// const passengerLower = passenger.toLowerCase();
// const passengerC = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerC);

// // check email
// const email = "hello@jonas.io";
// const loginEmail = "  Hello@Jonas.io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// // replacing
// const priceGB = "288,97$";
// const priceUS = priceGB.replace(",", "");
// console.log(priceUS);

// const announecement =
//   "All passengers coming to boarding door 23, Boarding door 23";
// console.log(announecement.replace("door", "gate"));
// console.log(announecement.replaceAll("door", "gate"));
// console.log(announecement.replace(/door/g, "gate"));

// // Booleans
// const newPlane = "A3neo";
// console.log(newPlane.includes("A3"));
// console.log(newPlane.includes("Boeing"));
// console.log(newPlane.startsWith("A"));

// if (newPlane.startsWith("A") && newPlane.endsWith("neo")) {
//   console.log("Yes");
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("Knife")) {
//     console.log("Not allowed");
//   }
// };

// checkBaggage("I have a Laptop");
// checkBaggage("Socks");
// checkBaggage("Gun");

// // split and Join
// console.log("a+verynice+strong".split("+"));
// console.log("Gagan Singla".split(" "));

// ["Mr."];

// const [firstName, lastName] = "Gagan Singla".split(" ");

// const newName = ["Mr.", firstName, lastName.toUpperCase()].join("-");
// console.log(newName);
// //const passenger = 'jessica ann smith davis';

// const capitalizeName = function (name) {
//   const newName = name.split(" ");
//   const namesUpper = [];
//   for (const names of newName) {
//     //namesUpper.push(names[0].toUpperCase() + names.slice(1));

//     namesUpper.push(names.replace(names[0], names[0].toUpperCase()));
//   }

//   console.log(namesUpper.join(' '));
// };

// const newPassenger = "Jessica ann smith";
// capitalizeName(newPassenger);

// //Padding
// const message = "Go to ggkkg";
// console.log(message.padStart(25, '+'));

// const maskCreditCard = function(number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// }

// console.log(maskCreditCard(12340000000000000));

// // Repeat
// const message2 = 'Bad Waether .... All departures will be late   ';

// console.log(message2.repeat(5));

// const planes = function(n)

"use strict";

// const bookings = [];

// const createBooking = function (flightNum, numPassenger = 1, price = 199) {
//   const booking = {
//     flightNum,
//     numPassenger,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");
// createBooking('LH!!!', 800, 123);

//

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// // High Order function
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by ${fn.name}`);
// };

// transformer("JavaScript is the Best", upperFirstWord);

// const greet = function(greeting) {
//   return function(name) {
//     console.log(`${greeting} ${name}`);
//   };
// }

// const greet = (greeting) => {

//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// }

// const greeter = greet('Hey');
// greeter('Gagan');
// greeter('Steven');

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  booking(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
  },
};

lufthansa.booking(239, "Gagan");
lufthansa.booking(6543, "Om");

const eurowings = {
  name: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.booking;

//book(23, "Sarah");

book.call(eurowings, 23, 'Sarah');
console.log(eurowings);