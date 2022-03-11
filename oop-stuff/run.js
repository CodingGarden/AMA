const Game = require('./Game');
const SoundManager = require('./SoundManager');

const game1 = new Game({
  fps: 30,
});

const game2 = new Game({
  trialMode: true,
});

console.log(game1.options);
console.log(game2.options);

game2.options = { wat: true };
console.log(game2.options);

game2.options.fps = 5;
console.log(game2.options);

console.log(SoundManager);
