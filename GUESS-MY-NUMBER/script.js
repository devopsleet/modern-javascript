'use strict';
/*

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number'
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 10

*/

const number = Math.random();




document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  !guess ? console.log('No number') : console.log(guess);
});
