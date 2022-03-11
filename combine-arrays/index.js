// audrew31: Hry I need help. How I can join seperate arrays of object into one array of objects in javaScript?

const people = [{
  name: 'Audrew',
}, {
  name: 'Doc',
}, {
  name: 'THE_SHE_BOSS',
}];

const otherPeople = [{
  name: 'MrDemonWolf',
}, {
  name: 'Alca',
}, {
  name: 'Limeoats',
}];

const someOtherPeople = [{
  name: 'OneComputerGuy',
}, {
  name: 'frogOnTheShore',
}, {
  name: 'Wucha',
}];

// const allThePeople = people.concat(otherPeople).concat(someOtherPeople);

// const allThePeople = [...people, ...otherPeople, ...someOtherPeople];

let allThePeople = [];

const allThePeopleArrays = [people, otherPeople, someOtherPeople];

// for (let i = 0; i < allThePeopleArrays.length; i += 1) {
//   allThePeople = allThePeople.concat(allThePeopleArrays[i]);
// }

// allThePeopleArrays.forEach((array) => {
//   allThePeople = allThePeople.concat(array);
// });

allThePeopleArrays.map((array) => {
  allThePeople = allThePeople.concat(array);
});

// const allThePeople = allThePeopleArrays
//   .reduce((all, array) => {
//     return all.concat(array);
//   }, []);

// const allThePeople = allThePeopleArrays
//   .reduce((all, array) => all.concat(array));

// const allThePeople = allThePeopleArrays.flat(3);

console.log(allThePeople);

const toInfinityAndBeyond = Infinity;

console.log([1, [2, [3, [4]]]].flat(toInfinityAndBeyond));
