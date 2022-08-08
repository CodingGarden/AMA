// can you explain why you shouldn't modify the prototype? there are good use cases like date formatter on date or case modifiers on strings right?


function smallEnough(a, limit){
  return a.every((number) => number <= limit);
}

function smallEnough(a, limit){
  return !a.some((number) => number > limit);
}

// DONT DO THIS!
// prototype pollution
Array.prototype.any = Array.prototype.some;

// Do this instead! Just import where needed
function arrayAny(array, callback) {
  return array.some(callback);
}
// Object.prototype
// Number.prototype
// String.prototype

function smallEnough(a, limit){
  return !a.any((number) => number > limit);
}

console.log(smallEnough([66, 101], 200), true);

Array.prototype.smoosh = Array.prototype.flat;

[1, [2, 3], [1, 2]].smoosh();

Array.prototype.map = () => ['no'];

console.log([1, 2, 3, 4].map((number) => number * 2));

Math.random = () => {
  // determined by fair dice roll
  return 4;
};

console.log(Math.random());
