/* eslint-disable */

// primitive types are passed by value!
// primitive types are immutable! they cannot be changed

function add(a, b) {
  a = a * 100;
  return a + b;
}

let firstNumber = 21;
console.log(add(firstNumber, firstNumber));
console.log(firstNumber);
firstNumber = 13;
console.log(firstNumber);

// reference types - are passed by reference...

function sayHello(person) {
  person.name = 'Alca';
  return `Hello ${person.name}`;
}

const cj = {
  name: 'CJ'
};
console.log(cj);
const greeting = sayHello(cj);
console.log(greeting);
console.log(cj);



// string concat vs number addition
// type coercion - "2" + "2" - "2"