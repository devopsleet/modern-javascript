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

const age = 9;

const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license");
} else {
  const yearsLeft = 18 - age;

  console.log(
    `Sarah cannot drive becase she still has ${yearsLeft} years left`
  );
}

const birthYear = 1991;
let century;

if (birthyear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);


const inputYear = '1991';
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number('Jonas'));
console.log(typeof(NaN));

console.log(String(23), 23);

//type coercion
console.log('I am' + 23 + ' years old');
console.log('23' - '10' - 3);

let n = '1' + 1;
n = n - 1
console.log(n);

console.log(Boolean(0));