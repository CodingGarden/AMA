// resources: https://del.dog/v/edypeginge.js
// https://www.hackerfactor.com/blog/?/archives/432-Looks-Like-It.html
// https://sharp.pixelplumbing.com/api-output#raw
// https://github.com/AndrewLaneX/photohash/blob/master/photohash/photohash.py#L22-L32

const fs = require('fs');
const sharp = require('sharp');

async function averageHash(filePath, hashSize = 8) {
  const buffer = await fs.promises.readFile(filePath);
  const resizedBuffer = await sharp(buffer)
    .resize(hashSize, hashSize)
    .greyscale()
    .raw()
    .toBuffer();

  const avgPixel = Math.floor(resizedBuffer
    .reduce((sum, value) => sum + (value), 0) / resizedBuffer.length);

  console.log(Array.from(resizedBuffer));
  console.log(avgPixel);

  const bits = resizedBuffer.map((value) => ((value) >= avgPixel ? 1 : 0)).join('');
  console.log(bits);
  const hashLength = Math.floor(hashSize ** 2 / 4);
  const bitsDecimal = parseInt(bits, 2);
  console.log(bitsDecimal.toString(hashLength));
}

averageHash('./alyson.jpg');

// article - 8f373714acfcf4d0
// me      - e7c7cacac2f6f800
// pyhash  - e7c7dac2c6fcfae8

// 1110011111000111110110101100001011000110111111001111101011101000
// 1110011111000111110010101100101011000010111101101111101011101000