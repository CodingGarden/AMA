const thing = () => {
  return () => {
    return 'wow';
  };
};

console.log(thing()());

const result = thing();
console.log(result);
console.log(result());

const nextResult = result();
console.log(nextResult);

console.log((() => thing()())());
