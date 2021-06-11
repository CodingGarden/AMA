function callTheAPI(data) {
  console.log('CALLING PROMISE FOR', data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        reject(new Error('SOMETHING BAD HAPPENED'));
      } else {
        resolve(data);
      }
    }, 1000 * Math.random());
  });
}

// function doTheLoops() {
//   const numbers = [1, 2, 3, 4];
//   for (let i = 0; i < numbers.length; i += 1) {
//     callTheAPI(numbers[i])
//       .then((result) => {
//         console.log('Got result for index', i, 'value', result);
//       }).catch(() => {
//         console.log('Error getting result for index', i, 'value', numbers[i]);
//       });
//   }
//   console.log('FOR LOOP DONE');
// }

// function doTheLoops() {
//   const numbers = [1, 2, 3, 4];
//   numbers.forEach((number, i) => {
//     callTheAPI(number)
//       .then((result) => {
//         console.log('Got result for index', i, 'value', result);
//       }).catch(() => {
//         console.log('Error getting result for index', i, 'value', numbers[i]);
//       });
//   });
//   console.log('FOR LOOP DONE');
// }

// function doTheLoops() {
//   const numbers = [1, 2, 3, 4];
//   Promise.all(numbers.map((number, i) => {
//     return callTheAPI(number)
//       .then((result) => {
//         console.log('Got result for index', i, 'value', result);
//       }).catch(() => {
//         console.log('Error getting result for index', i, 'value', numbers[i]);
//       });
//   })).then(() => {
//     console.log('FOR LOOP DONE');
//   });
// }

// async function doTheLoops() {
//   const numbers = [1, 2, 3, 4];
//   for (let i = 0; i < numbers.length; i += 1) {
//     try {
//       // eslint-disable-next-line no-await-in-loop
//       const result = await callTheAPI(numbers[i]);
//       console.log('Got result for index', i, 'value', result);
//     } catch (error) {
//       console.log('Error getting result for index', i, 'value', numbers[i]);
//     }
//   }
//   console.log('FOR LOOP DONE');
// }

async function* numberGenerator() {
  const numbers = [1, 2, 3, 4];
  for (const number of numbers) {
    try {
      yield await callTheAPI(number);
    } catch (error) {
      yield error;
    }
  }
}

async function doTheLoops() {
  const numbers = numberGenerator();
  try {
    for await (const result of numbers) {
      console.log('Got result for value', result);
    }
  } catch (error) {
    console.log(error);
  }
  console.log('FOR LOOP DONE');
}

doTheLoops();














// async function getAllTheDatabases() {
//   try {
//     const results = await Promise.allSettled([
//       readSpecialData(DB1),
//       readSpecialData(DB2),
//       readSpecialData(DB3),
//       readSpecialData(DB4),
//     ]);
  
//     if (results[0].status === 'fulfilled') {
//       results[0] // DB1 results
//     } else {
//       console.log('DB1 failed...');
//     }
//     results[1] // DB2 results
//     results[2] // DB3 results
//     results[3] // DB4 results
//   } catch (error) {
//     console.log('one failed...'); 
//   }
// }
