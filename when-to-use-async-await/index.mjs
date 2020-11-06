import fs from 'fs';
/**
  * Cyberiah - i've been workin on nodejs, but i still don't know when to use async/await. i never learned in college FeelsBadMan
  * If something returns a promise!
*/

// fs
//   .promises
//   .readFile('index.mjs', 'utf-8')
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

const data = await fs.promises.readFile('index.mjs', 'utf-8');
console.log(data);
