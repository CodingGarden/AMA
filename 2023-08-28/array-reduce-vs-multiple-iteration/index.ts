// liamstevens3215
// in JS, when would you prefer the more efficient reduce function over multiple iterations with map/filter/sort etc? Only when the array/data is large?

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// const doubledEvenNumbers = evenNumbers.map((num) => num * 2);

// const results = numbers
//   .map((num) => num * 2)
//   .filter((num) => num % 2 === 0);
  // .filter((num) => {
  //   if (num % 2 === 0) {
  //     return true;
  //   }
  //   return false;
  // });

// const results: number[] = [];

// for (let i = 0; i < numbers.length; i++) {
//   const num = numbers[i];
//   if (num % 2 === 0) {
//     results.push(num * 2);
//   }
// }

// numbers
//   .forEach((num) => {
//     if (num % 2 === 0) {
//       results.push(num * 2);
//     }
//   });

// const results = numbers
//   .reduce((results, num) => {
//     if (num % 2 === 0) {
//       results.push(num * 2);
//     }
//     return results;
//   }, [] as number[]);

const results = numbers.flatMap((num) => {
  if (num % 2 === 0) {
    return num * 2;
  }
  return [];
});


console.log(results);

