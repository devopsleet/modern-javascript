'use strict'

function logger() {
    console.log('My name is Jonas');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;

    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);


const num = Number('23');
console.log(num);

// Function declaration
function calcAge1(birthYear) {
    //const age = 2037 - birthYear;
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);


// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

console.log(calcAge2(1991));

