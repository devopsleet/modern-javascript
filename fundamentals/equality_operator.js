const age = 18;

if(age === 18) {
    console.log(`You just became an adult`);
} else {
    console.log(`You are a teenager`);
} 

const favorite = prompt("What is your favorite number")
console.log(favorite);

if (favorite == 23) {
    console.log(`Cool!`);
}

if (favorite === 23) {
    console.log(`Not Cool!`);
} else if (favorite === 7) {
    console.log(`7 is also a cool number`);
} else {
    console.log(`Number is not 23 or 7`);
}

if(favorite !== 23) {
    console.log(`Why not 23?`);
}