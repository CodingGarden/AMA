const SoundManager = require('./SoundManager');
const optionsJSON = require('./defaultOptions.json');

// function Game(options) {
//   if (!options) {
//     options = {};
//   }
//   this._options = Object.assign({}, optionsJSON, options);
// }

// Game.prototype.getOptions = function() {
//   return this._options;
// }

class Game {
  #options = {};
  // #soundManager = new SoundManager();
  // static SoundManager = new SoundManager();

  constructor(options = {}) {
    this.#options = {
      ...optionsJSON,
      ...options,
    };
  }

  // getOptions() {

  // }

  get options() {
    return this.#options;
  }

  // get SoundManager() {
  //   if (this.#soundManager === null) {
  //     this.#soundManager = new SoundManager();
  //   }
  //   return this.#soundManager;
  // }
}

module.exports = Game;
