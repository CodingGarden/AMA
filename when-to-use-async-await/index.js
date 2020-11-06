const fs = require('fs');

/**
  * Cyberiah - i've been workin on nodejs, but i still don't know when to use async/await. i never learned in college FeelsBadMan
  * If something returns a promise!
*/

// fs
//   .promises
//   .readFile('index.js', 'utf-8')
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

async function doTheThing() {
  try {
    const data = await fs.promises.readFile('index.js', 'utf-8');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function getName() {
  return 'CJ';
}

// function getName() {
//   return Promise.resolve('CJ');
// }

doTheThing();

getName()
  .then(name => {
    console.log(name);
  })