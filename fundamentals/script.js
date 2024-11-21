const jonas = {
  firstName : "Jonas",
  lastName : "Singla",
  age : 2037 - 1991,
  job : 'teacher',
  friends : ['Michael', 'Peter', 'Steven'],
  hasDriversLicense : false,
  birthYear: 1998,
  calcAge: function() {
    console.log(this);
    return 2037 - this.birthYear;
  }

};

console.log(`${jonas.firstName} is ${jonas.age} years old and he ${jonas.hasDriversLicense ? 'has a' : 'no'} driver's license`);

// for loop keeps runnning while condition is TRUE

for(let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition`);
}

for(let i = 0; i < 10; i++) {
  console.log('i');
}
// console.log(jonas.calcAge(1991));


// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';

// console.log(jonas['first' + nameKey]);

// // const interestedIn = prompt('What do you wnt to know about Jonas?')
// // console.log(jonas[interestedIn]);

// // if(jonas[interestedIn]) {
// //   console.log(jonas[interestedIn]);
// // }

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`);