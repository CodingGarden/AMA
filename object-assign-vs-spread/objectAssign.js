// function assign(target, source) {
//   return Object.entries(source).reduce((result, [key, value]) => {
//     result[key] = value;
//     return result;
//   }, target);
// }

function assign(target, source) {
  Object.entries(source).forEach(([key, value]) => {
    target[key] = value;
  });
  return target;
}

function deepAssign(target, source) {
  Object.entries(source).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      // only works for the array itself
      // inner reference types are still references
      target[key] = value.slice();
    } else if (typeof value === 'object') {
      target[key] = deepAssign({}, value);
    } else {
      target[key] = value;
    }
  });
  return target;
}

let person = { dogName: 'Panzer', name: 'NukiePoo' };

const favNumbers = [42, 13, 7];

console.log(person);

const newPersonProps = {
  name: 'CJ',
  favColor: 'blue',
  favNumbers,
};

deepAssign(person, newPersonProps);

console.log(person);

console.log(person.favNumbers === newPersonProps.favNumbers);
