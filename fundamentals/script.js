// console.log(23);

// // let firstName = "Jonas"

// let boolean = true

// console.log(boolean);

// // Variable name conventions

// console.log(true)

// let javascriptISFun = true;

// console.log(javascriptISFun);

// console.log(typeof true);
// console.log(typeof 23);
// //console.log(typeof firstName);

// javascriptISFun = 'YES!'

// console.log(javascriptISFun);

// let year;

// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// let age = 30

// age = 122

// console.log(age);

// const birthYear = 1991;
// // birthYear = 2002

// // console.log(birthYear);

// const job = 23;

// const ageJonas = 2037 - 1991;
// const ageSarah = 2037 - 2018;
// console.log(ageSarah);
// console.log(ageJonas);

// console.log(ageJonas * 2., ageJonas / 10, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = "Singla"

// console.log(firstName + ' ' + lastName);

// // let x= 10 + 5;
// // x += 10;
// // console.log(x);

// console.log(ageSarah >= ageJonas);

// const isFullAge = ageSarah>= 18;

// // console.log(now );
// console.log(25 - 10 - 5);

// let x,y;

// x = y = 25 - 10 - 5;

// console.log(x, y);

const first = "Gagan";
const job = "Programmer";
const birthyear = 1991;
const year = 2037;

const jonas = "I'm " + first + " " + ",a " + (year - birthyear) + " years old";
console.log(jonas);

const jonasNew = `I'm ${first}, a ${
  year - birthyear
} years old and I'm a ${job}`;
console.log(jonasNew);

console.log(`Just a regular string without any back ticks....`);

console.log(`Strings
multiple
lines
`);

// const newage = 9;

// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("Sarah can start driving license");
// } else {
//   const yearsLeft = 18 - age;

//   console.log(
//     `Sarah cannot drive becase she still has ${yearsLeft} years left`
//   );
// }

const birthYear = 1991;
let century;

if (birthyear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

const inputYear = "1991";
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I am" + 23 + " years old");
console.log("23" - "10" - 3);

let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(Boolean(undefined));
console.log(Boolean({}));

const money = 100;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a Job");
}

let height = 0;

if (height) {
  console.log("Height is defined");
} else {
  console.log("height is undefined");
}

const age = 18;
if (age === 18) {
  console.log("You just became an adult");
}

if (age == 18) console.log("Loosely equalled");

if (age != 20) console.log("It is tightly coupled");

//const favorite = prompt('Whats your favorite number?')

const hasDriversLicense = true;

const hasgoodvision = true;

console.log(hasDriversLicense && hasgoodvision);

const day = "thursday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("MONDAy");
    console.log("Go to coding meetup");
    break;

  case "tuesday":
    console.log("Prtepare theory videos");
    break;
  case "wedneday":
    console.log("Wed");
  case "thursday":
    console.log("Thurs");
    break;
  case "friday":
  case "saturday":
  case "sunday":
    console.log(`It's Sunday`);
}


const me = 'Gagan';
const myAge = 31;

// Statement
console.log(`hello! My name is ${me} and I'm ${myAge} years old`);

const $$age = 23;

age >= 18 ? console.log('I like to drink wine  🍷') : console.log('I like to drink water');