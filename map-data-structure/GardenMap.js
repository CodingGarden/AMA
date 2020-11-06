class GardenMap {
  constructor(entries) {
    this.data = Object.fromEntries(entries || []);
  }

  set(key, value) {
    this.data[key] = value;
  }

  has(key) {
    return Object.prototype.hasOwnProperty.call(this.data, key);
  }

  get(key) {
    if (this.has(key)) {
      return this.data[key];
    }
  }

  delete(key) {
    delete this.data[key];
  }
}


const myMap = new GardenMap();
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
