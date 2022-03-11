const thing = NaN;

// if (!thing) {
if (thing === null || thing === undefined || thing === 0 || thing === '' || isNaN(thing)) {
  console.log('THING IS FALSY!');
} else {
  console.log('THING IS TRUTHY!');
}
