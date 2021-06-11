// closures -> scope

// function add(a, b) {
//   return a + b;
// }

function add(a) {
  console.log('a is', a);
  return function (b) {
    console.log('a is', a);
    return a + b;
  };
}

const tenAdder = add(10);

console.log(tenAdder(32));

// console.log();
// console.log(add(30));

function makeSecret() {
  const thisIsSecret = Math.floor(Math.random() * 10);
  console.log('shhhh! the secret value is', thisIsSecret);
  return {
    getValueUsingSecret() {
      return thisIsSecret + 10;
    },
  };
}

const secretThing = makeSecret();

console.log(secretThing);
console.log(secretThing.getValueUsingSecret());
console.log(secretThing.thisIsSecret);


function by(propName) {
  return (a, b) => {
    if (a[propName] > b[propName]) return 1;
    if (a[propName] < b[propName]) return -1;
    return 0;
  };
}

const person1 = { name: 'joe', height: 72 };
const person2 = { name: 'rob', height: 70 };
const person3 = { name: 'nicholas', height: 66 };

const people = [person1, person2, person3];

console.log(people);

const byHeight = by('height');

people.sort(byHeight);

console.log(people);

const byName = by('name');

people.sort(byName);

console.log(people);

// const arr_sorted = arr_.sort(by('height')); // [ { name: 'nicholas', height: 66 }, { name: 'rob', height: 70 },{ name: 'joe', height: 72 } ]
