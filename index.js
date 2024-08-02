// This is a comment
console.log('Hello world');

//Reassignable
let name = 'Joe';

//Value of a variable cannot change
const favouriteNumber = 19;


//Object literal
let person = {
    name: 'Joe',
    age: 22
};

console.log(person)

//Dot notation
person.name = 'Bob';
person.age = 28;

console.log(person.name);

//Bracket notation
person['name'] = 'Jane';
console.log(person.name);


//Arrays: store a list of items
let availableColours = ['red', 'green'];
availableColours[2] = 'blue';
console.log(availableColours);
console.log(availableColours.length);

//Functions

function hello(name) {
    alert(`Hi, this is an alert. Hello ${name}. Very swag very cool`);
}

let firstName = prompt('What is your name?');

hello(firstName);


//Manipulating HTML with JavaScript
document.getElementById('p1').textContent = `Your name is ${firstName}`;

//Math object

x = 3.99
y = 3.99
z = 3.99

//Round number
Math.round(x)

//Rounds number down
Math.floor(y)

//Rounds number up
Math.ceil(z)

//Truncate: remove decimals
Math.trunc(z)

//Square root function
x = 3
squareRoot = Math.sqrt(x)
console.log(squareRoot)

//Find the highest value
x = 3
y = 7
z = 143131

let max = Math.max(x, y, z)
console.log(max)

//If statements

superDuperSecretPassword = "bananas"
passwordPrompt = prompt("Enter the password:")

if (passwordPrompt == superDuperSecretPassword){
    console.log("Correct")
}
else {
    console.log("VERY SAD!")
}

//Switches

let day = 3

switch(day){
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 7:
        day = "Sunday";
        break;
}

console.log(`Today is ${day}`)

//While loop
running = 5
while(running){
    console.log(running)
    running--
}

running2 = 5

//Do while loop. Evaluates if running2 is True only after having run the loop for one time.
do{
    console.log(running2)
    running2--
}while (running2)