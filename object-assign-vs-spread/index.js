// What's the difference between Object.assign(object, secondObject) and {...object, ...secondObject}

let person = { name: 'NukiePoo' };

const favNumbers = [42, 13, 7];

console.log(person);

const newPersonProps = {
  name: 'CJ',
  favColor: 'blue',
  favNumbers,
};

// Object.assign(person, newPersonProps);
person = Object.assign({}, person, newPersonProps);

console.log(person);

console.log(person.favNumbers === newPersonProps.favNumbers);

// let person = { name: 'NukiePoo' };

// const favNumbers = [42, 13, 7];

// console.log(person);

// const newPersonProps = {
//   name: 'CJ',
//   favColor: 'blue',
//   favNumbers,
// };

// person = {
//   ...person,
//   ...newPersonProps,
// };

// console.log(person);
