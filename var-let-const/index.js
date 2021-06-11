// var name = 'CJ';

// const name = 'CJ';


// 1. Let variables can be re-assigned
// let name = 'CJ';

// console.log(name);

// name = 'Coding Garden';

// console.log(name);

// 2. Const variables cannnot be re-assigned
// const name = 'CJ';

// console.log(name);

// name = 'Coding Garden';

// console.log(name);

// 3. Const variables can change or be modified... (if its a reference type)

// const settings = {
//   isLive: true,
// };

// console.log(settings);

// settings.isLive = false;

// console.log(settings);

// SCOPE

// function doThing() {
//   var name = 'CJ';
//   console.log('BEFORE', name);
//   if (true) {
//     var name = 'OKAY!';
//     console.log('INSIDE BLOCK', name);
//     if (true) {
//       var name = 'again!';
//       console.log('INSIDE INSIDE BLOCK', name);
//     }
//   }
//   console.log('AFTER', name);
// } 

function doLetThing() {
  let name = 'CJ';
  console.log('BEFORE', name);
  if (true) {
    let name = 'OKAY!';
    console.log('INSIDE BLOCK', name);
    if (true) {
      let name = 'again!';
      console.log('INSIDE INSIDE BLOCK', name);
    }
  }
  console.log('AFTER', name);
}

doLetThing();

function doConstThing() {
  const name = 'CJ';
  console.log('BEFORE', name);
  if (true) {
    const name = 'OKAY!';
    console.log('INSIDE BLOCK', name);
    if (true) {
      const name = 'again!';
      console.log('INSIDE INSIDE BLOCK', name);
    }
  }
  console.log('AFTER', name);
}

doConstThing();


global.thing = 'WOW';