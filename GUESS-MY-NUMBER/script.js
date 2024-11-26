'use strict';


function calcAge(birthyear) {
  // const age = 2037 - birthyear;
  console.log(firstName);

  function printAge() {
    const output = `You are ${age}, born in ${birthyear} `;
    console.log(output);
    var age = 2037 - birthyear;
    if(birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      const str = `Oh, you are a millenial, ${firstName}`;
      console.log(str);

      function add(a,b) {
        return a + b;
      }

    }
    console.log(millenial);
    add(2,3);
  }
  //console.log(str);
  
  printAge()
  return age;

}

const firstName = 'Jonas';
calcAge(1991);
//console.log(age);

// /*

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number'
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 10

// */

// const number = Math.random();




// document.querySelector('.check').addEventListener('click', () => {
//   const guess = Number(document.querySelector('.guess').value);

//   !guess ? console.log('No number') : console.log(guess);
// });



