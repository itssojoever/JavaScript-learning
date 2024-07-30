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