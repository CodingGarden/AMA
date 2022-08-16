// Timon - Hey CJ. I saw some people using "!!myVariable". What the double negation does?

let isCool = true;

let notCool = !isCool;

let realyIsCool = !!isCool;

let person = undefined;

// let personIsTruthy;

// if (person !== undefined || person !== null || person !== 0) {
//   personIsTruthy = true;
// } else {
//   personIsTruthy = false;
// }

let personIsTruthy = !!person;


console.log(personIsTruthy);
