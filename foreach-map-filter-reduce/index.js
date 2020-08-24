// Higher Order Function
// - A function that takes a function as a parameter
// - A function that returns a function

const chatters = [{
  name: 'Alca',
  role: 'mod',
  favoriteColor: 'Blue',
  favoriteNumber: 42,
}, {
  name: 'MrDemonWolf',
  role: 'mod',
  favoriteColor: '#091533',
  favoriteNumber: 1337,
}, {
  name: 'Jon',
  role: 'vip',
  favoriteColor: 'Yellow',
  favoriteNumber: 109234,
}, {
  name: 'MajesticEye',
  role: 'vip',
  favoriteColor: 'Blue',
  favoriteNumber: 33,
}, {
  name: 'AndrewLaneX',
  role: 'mod',
  favoriteColor: '#262626',
  favoriteNumber: 1,
}];

// for (let i = 0; i < chatters.length; i += 1) {
//   const chatter = chatters[i];
//   console.log(chatter.name);
// }

// const logName = (item, index, array) => {
//   console.log(item.name);
// };

// chatters.forEach(logName);

// ---------------------------------------
// MAP
// Takes an array of 1 thing, and returns a new array of another thing (with the exact same length)...

// const names = [];

// for (let i = 0; i < chatters.length; i += 1) {
//   const chatter = chatters[i];
//   names.push(chatter.name);
// }

// console.log(names);

// const names = [];

// chatters.forEach((chatter) => {
//   names.push(chatter.name);
// });

// console.log(names);

// const names = chatters.map((chatter) => {
//   return chatter.name;
// });

// console.log(names);

const names = chatters.map((chatter) => chatter.name);
console.log(names);

const favoriteNumbers = chatters.map((chatter) => {
  return chatter.favoriteNumber;
});

console.log(favoriteNumbers);

const chattersWithRole = chatters.map((chatter) => {
  return {
    name: chatter.name,
    role: chatter.role,
  };
});

console.log(chattersWithRole);

const chattersWithRoleHipsterVersion = chatters.map(({
  name,
  role,
}) => ({
  name,
  role,
}));

console.log(chattersWithRoleHipsterVersion);

// ---------------------------------------

// ---------------------------------------
// FILTER
// Takes an array of 1 thing, and returns a new array of the same things (with possibly a smaller length)...

// const mods = [];

// for (let i = 0; i < chatters.length; i += 1) {
//   const chatter = chatters[i];
//   if (chatter.role === 'mod') {
//     mods.push(chatter);
//   }
// }

// console.log(mods);

// const mods = [];

// chatters.forEach((chatter) => {
//   if (chatter.role === 'mod') {
//     mods.push(chatter);
//   }
// });

// console.log(mods);

// const mods = chatters.filter((chatter) => {
//   if (chatter.role === 'mod') {
//     return true;
//   }
//   return false;
// });

// const mods = chatters.filter((chatter) => {
//   if (chatter.role === 'mod') {
//     return true;
//   }
// });

// const mods = chatters.filter((chatter) => {
//   return chatter.role === 'mod';
// });

// const mods = chatters.filter((chatter) => chatter.role === 'mod');

// console.log(mods);

// REDUCE
// Takes an array of one thing, and returns 1 new thing

// let sum = 0;

// for (let i = 0; i < chatters.length; i += 1) {
//   const chatter = chatters[i];
//   sum += chatter.favoriteNumber;
// }

// console.log(sum);

// let sum = 0;

// chatters.forEach((chatter) => {
//   sum += chatter.favoriteNumber;
// });

// console.log(sum);

// const resultSum = chatters.reduce((sum, chatter) => {
//   sum += chatter.favoriteNumber;
//   return sum;
// }, 0);

// const resultSum = chatters.reduce((sum, chatter) => {
//   return sum + chatter.favoriteNumber;
// }, 0);

const resultSum = chatters.reduce((sum, chatter) => sum + chatter.favoriteNumber, 0);

console.log(resultSum);