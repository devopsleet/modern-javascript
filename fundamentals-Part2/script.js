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


const age1 = calcAge1(1991);
// Function declaration
function calcAge1(birthYear) {
    //const age = 2037 - birthYear;
    return 2037 - birthYear;
}


console.log(age1);

//console.log(calcAge2(1991));

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

//console.log(calcAge2(1991));

// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
console.log(calcAge3(1991));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Bob'));