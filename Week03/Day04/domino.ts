/* You have the list of Dominoes
Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides
eg: [2, 4], [4, 3], [3, 5] ... */


class Domino {
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }
}


function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let diceSet = new diceSet();
console.log(diceSet.roll());

console.log("------------------");

for (let i: number = 0; i <= diceSet.dice.length - 1; i++) {
   while (diceSet.dice[i] !== 6) {
       diceSet.reroll(i);
       console.log(`Dice N.o.: ${i + 1}; New roll: ${diceSet.getCurrent(i)}`);
   }
}

console.log(diceSet);
