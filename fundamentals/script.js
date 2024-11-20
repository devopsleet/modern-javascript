'use strict';

let hasDriversLicense = false;

const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}

if (hasDriversLicense) console.log('Has drivers license');


// const interface = "Audio";

// const private = 534;

function logger() {
  console.log('My name is Jonas');
}

// calling / running /invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} appleas and ${oranges} oranges`;
  return juice;
}


const ans = fruitProcessor(2,3);
console.log(ans);
console.log();

console.log(Number('23'));
console.log('23');


function calcAge1(birthYear) {
  const age = 2037 - birthYear;

  return age;


}

const age1 = calcAge1(1991);

// anonymous function
// function expression
const calcAge2 = function(birthYear) {
  return 2037 - birthYear
}

const age2 = calcAge2(2037);

console.log(age2);

// Arrow functions
// Function expression
const calcAge3 = birthYear => 2037 - birthYear;

const yearsUntilretiremenet = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retirement`;
}

console.log( yearsUntilretiremenet(1991, 'Gagan'));
console.log(yearsUntilretiremenet(2012, "abc"));


// Arrays
const friend1 = 'Michael1';
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2020);

console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Gagan';

const jonas = [firstName, 'Singla', 2037 - 1991, friends]
console.log(jonas);

const newLength = friends.push('gagan')
console.log(newLength);

console.log(friends);


friends.unshift('John')
console.log(friends);

// remove

friends.pop();
console.log(friends);

console.log(friends.indexOf('Steven'));
friends.push('Peter')
if (friends.includes('Peter')) {
  console.log(`You have a friend`);
}

