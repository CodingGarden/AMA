// Map
// What is Map

// maps keys to values
// location -> Denver CO
// name -> CJ
// dog -> panzer

// How do you use Map

const myMap = new Map();
myMap.set('location', 'Denver, CO');
myMap.set('name', 'CJ');
myMap.set('dog', 'panzer');

console.log(myMap.get('location'));
console.log(myMap.get('name'));
console.log(myMap.get('dog'));

myMap.set(42, 'answer');

console.log(myMap.get(42));
console.log(myMap.get('42'));

myMap.set(42, 'wat');
console.log(myMap.get(42));

function whyYouDoThis() {

}

myMap.set(whyYouDoThis, {
  name: 'Ed',
});

console.log(myMap.get(whyYouDoThis));

myMap.set(() => {}, 'wat');

console.log(myMap.get(() => {}));

console.log(myMap.has(() => {}));
console.log(myMap.has(whyYouDoThis));

myMap.set(myMap, {
  metadata: true,
});

console.log(myMap.get(myMap));

myMap.delete(myMap);

console.log(myMap.get(myMap));

console.log([...myMap.entries()]);
myMap.forEach((value, key) => {
  console.log(value, key);
});

console.log([...myMap.values()]);
console.log([...myMap.keys()]);

const myInitializedMap = new Map([
  ['location', 'Denver, CO'],
  ['name', 'CJ'],
  ['dog', 'panzer'],
]);

console.log(myInitializedMap.get('location'));

// convert to object

// non string keys are stringified...
console.log(Object.fromEntries(myMap));

// When do you use Map

// Alternatives

const myObjectMap = {
  location: 'Denver CO',
  name: 'CJ',
  dog: 'panzer',
};

console.log(myMap.location);
const key = 'location';
console.log(myMap[key]);

if (myMap.hasOwnProperty('constructor')) {
  console.log(myMap['constructor']);
}

if (Object.prototype.hasOwnProperty.call(myMap, 'constructor')) {
  console.log(myMap['constructor']);
}

// Lets make our own from scratch!
