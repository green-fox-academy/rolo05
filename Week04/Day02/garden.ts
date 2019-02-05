
/* The Garden
is able to hold unlimited amount of flowers or trees
when watering it should only water those what needs water with equally divided amount amongst them
eg. watering with 40 and 4 of them need water then each gets watered with 10
The Flower
needs water if its current water amount is less then 5
when watering it the flower can only absorb the 75% of the water
eg. watering with 10 the flower's amount of water should only increase with 7.5
The Tree
needs water if its current water amount is less then 10
when watering it the tree can only absorb the 40% of the water
eg. watering with 10 the tree's amount of water should only increase with 4 */

'use strict';

class Garden {
  gardenArr: any[];
  constructor(addGardenArr: any[] = []) {
    this.gardenArr = addGardenArr;
  }
  addTreeOrFlower(...plant: any) {
    this.gardenArr = plant;
    }
  waterTheGarden(water: number) {
    this.gardenArr.forEach(plant => {
     return plant.watering(water / this.gardenArr.length);
    });
  }
}

class Plant {
  currentWater: number;
  color: string;
  type: string;
  constructor(addColor: string, addType: string, addCurrentWater: number) {
    this.color = addColor;
    this.type = addType;
    this.currentWater = addCurrentWater;
  }
}

class Tree extends Plant {
  constructor(addColor: string, addType: string, addCurrentWater: number = 0) {
    super(addColor, addType, addCurrentWater);
    this.color = addColor;
    this.type = addType;
    this.currentWater = addCurrentWater;
  }
  watering(water: number) {
    if (this.currentWater < 10) {
      this.currentWater += water * 0.4;
      if (this.currentWater < 10) {
        console.log(`The ${this.color} ${this.type} needs water`)
      }
      else {
        console.log(`The ${this.color} ${this.type} doesn't need water`)
      }
    }
    else if (this.currentWater >= 10) {
      console.log(`The ${this.color} ${this.type} doesn't need water`)
    }
  }
}

class Flower extends Plant {
  constructor(addColor: string, addType: string, addCurrentWater: number = 0) {
    super(addColor, addType, addCurrentWater);
    this.color = addColor;
    this.type = addType;
    this.currentWater = addCurrentWater;
  }
  watering(water: number) {
    if (this.currentWater < 5) {
      this.currentWater += water * 0.75;
      if (this.currentWater < 5) {
        console.log(`The ${this.color} ${this.type} needs water`)
      }
      else {
        console.log(`The ${this.color} ${this.type} doesn't need water`)
      }
    }
    else if (this.currentWater >= 5) {
      console.log(`The ${this.color} ${this.type} doesn't need water`)
    }
  }
}
let garden = new Garden;

let pipacs = new Flower('yellow', 'Flower');
let rose = new Flower('blue', 'Flower');
let almaFa = new Tree('purple', 'Tree');
let narancsFa = new Tree('orange', 'tree');

garden.addTreeOrFlower(pipacs, rose, almaFa, narancsFa);

console.log(garden.gardenArr);

garden.waterTheGarden(40);
garden.waterTheGarden(70);

console.log(garden.gardenArr);
