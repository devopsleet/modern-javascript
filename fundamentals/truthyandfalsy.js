console.log(Boolean(0));
console.log(Boolean(' '));
console.log(Boolean({}));
console.log(Boolean(undefined));

const money = 0;

if(money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job');
}


let height = 67;

if(height) {
    console.log(`height is defined`);
} else{
    console.log('height is not defined');
}