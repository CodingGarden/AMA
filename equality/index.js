// ==
// (compares value only)
// (coerce types if they are not the same before comparing)

console.log(2 == '2');
console.log(true == 1);
console.log(true == 0);


const a = { name: 'CJ' };
const b = { name: 'CJ' };
// both compare reference values, not a deep compare
console.log(a == b);
console.log(a === b);

// ===
// (compares type and value)
// (no coercion)

console.log(2 === '2');
console.log(true === 1);
console.log(true === 0);
