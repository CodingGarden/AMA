const assert = require('assert');

function compress(input) {
  // a place to store the current letter - initialized to empty string
  let currentLetter = '';
  // a place to store the current count - initialized to 0
  let count = 0;
  // a place to store the compressed string - initialized to empty string
  let compressed = '';
  // iterate over each letter in input
  for (let i = 0; i < input.length; i += 1) {
    const letter = input[i];
    // if the current letter is not equal the current letter in the input
    if (currentLetter !== letter) {
      // if the current letter and count have a value
      if (currentLetter && count) {
        // append count and value to the compressed string
        compressed += count + currentLetter;
      }
      // set current letter to the current letter
      currentLetter = letter;
      // set count to 1
      count = 1;
    }
    // else if the current letter is equal to the current letter
    else {
      // increment the count
      count += 1;
    }
  }
  // if the current letter and count have a value
  if (currentLetter && count) {
    // append count and value to the compressed string
    compressed += count + currentLetter;
  }
  // return the compressed string
  return compressed;
}

assert(
  compress('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW')
    === '12W1B12W3B24W1B14W',
);

console.log(compress('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW'));
console.log(compress(''));

function decompress(compressed) {
  // a place to store the decompressed string - initialized to an empty string
  let decompressed = '';
  // a place to store the current count part - initialized to empty string
  let currentCount = '';
  // iterate over the compressed string
  for (let i = 0; i < compressed.length; i += 1) {
    const character = compressed[i];
    // if the current character is a number
    if (!isNaN(character)) {
      // append the number to the current count
      currentCount += character;
    } else {
      // if the current character is a letter
      // iterate up to the current count
      for (let j = 0; j < currentCount; j += 1) {
        // append the current letter to the decompressed string
        decompressed += character;
      }
      currentCount = '';
      // reset current count to empty
    }
  }
  return decompressed;
}

assert(
  decompress('12W1B12W3B24W1B14W')
    === 'WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW',
);

console.log(decompress('12W1B12W3B24W1B14W'));