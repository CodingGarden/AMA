/**
 * I recently learned how arrow functions work, but I don't understand how it makes it simpler and more readable than fucntions.
 */

class Player {
  constructor(name) {
    this.name = name;
    this.isDead = false;
    this.hunger = 0;
    this.damagePerTick = 10;
    this.inventory = [
      {
        type: 'bread',
        value: 100,
      },
    ];
  }

  tick() {
    this.hunger += 1;
    if (this.hunger >= 100) {
      this.isDead = true;
    }
    // const that = this;
    // this.inventory.forEach(function (item) {
    //   item.value -= that.damagePerTick;
    // });
    this.inventory.forEach((item) => {
      item.value -= this.damagePerTick;
    });
  }

  takeStep() {
    this.hunger += 10;
  }

  eat(food) {
    this.hunger -= food.value;
    if (this.hunger < 0) {
      this.hunger = 0;
    }
    if (this.hunger >= 100) {
      this.isDead = true;
    }
  }
}

const playerOne = new Player('cj');
const playerTwo = new Player('onelineofme');
const playerThree = new Player('onelineofme');

setInterval(() => {
  playerOne.tick();
}, 2000);

console.log('Current inventory:', playerOne.inventory);
setInterval(() => {
  console.log('Current inventory:', playerOne.inventory);
}, 2000);
