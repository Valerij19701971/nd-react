// const animals1 = ['cat', 'giraffe', 'elephant', 'dog'];

// // Goal: show each animal's name and its length
// const result = animals1.map((animal, index) => {
//     return `${index + 1}. ${animal} (${animal.length} letters)`;
// });
// console.log(result);

//----------------------------------------

const animals = ['cat', 'giraffe', 'elephant', 'dog'];
console.log(animals);

function callback(animal, index) {
    return `${index + 1}. ${animal} (${animal.length} letters)`;
}
const result = animals.map(callback);
console.log(result);


function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet('Alice'); // Hello, Alice!

//-------------------------------------

function doSomethingWithName(callback) {
    const hisName = 'Peter';
    callback(hisName); // <- this is where we "call back"
}

doSomethingWithName(greet); // output: Hello, Peter!

//-------------------------------------
// 🧠 Visual Break Down:
// Let’s rewrite it with comments to see what’s really happening:
function greet(name) {
    console.log(`Hello, ${name}!`);
}
const hisName = 'Peter'
greet(hisName);

function greet(name) {
    console.log(`Hello, ${name}!`);
}

// 👇 Call outer function and pass greet as the argument
doSomethingWithName(greet);

// So now:
function doSomethingWithName(callback) {
    const hisName = 'Peter';

    // callback = greet
    // callback(hisName) = greet('Peter')
    callback(hisName);
}


//--------------------------------------
const cars = [
    { brand: 'Toyota', color: 'blue', year: 2020 },
    { brand: 'BMW', color: 'black', year: 2018 },
    { brand: 'Tesla', color: 'red', year: 2023 }
];

function renderCar(car, index) {
    return `${index + 1}. 🚗 ${car.brand} (${car.color}, ${car.year})`;
}

const result1 = cars.map(renderCar);

console.log(result1);

//-------------------------------------------------------------

const fruits = ['apple', 'banana', 'kiwi', 'watermelon', 'fig', 'orange'];
console.log(fruits);
//---------------------------------------------------------
const sortFruits = fruits.sort((a, b) => a.length - b.length);
console.log(sortFruits);
console.log(fruits);
//---------------------------------------------------------------
const fruits1 = ['apple', 'banana', 'kiwi', 'watermelon', 'fig', 'orange'];
const sortFruits1 = [...fruits1].sort((a, b) => b.length - a.length);
console.log(fruits1);
console.log(sortFruits1);
//--------------------------------------------------------------
const mapFruits1 = sortFruits1.map((fruit, index) => `${index +1}. ${fruit} (${fruit.length} letters)`);
console.log(mapFruits1);
