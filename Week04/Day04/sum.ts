/* Create a sum method in your class which has a list of integers as parameter
It should return the sum of the elements in the list
Follow these steps:
Add a new test case
Instantiate your class
create a list of integers
use the t.equal to test the result of the created sum method
Run it
Create different tests where you test your method with:
an empyt list
a list that has one element in it
a list that has multiple elements in it
a null
with a string
Run them
Fix your code if needed */
'use strict'

export class Numbers{
    szamok:number[];
    constructor(bemenoszamok:number[]){
        this.szamok = bemenoszamok;
    }

    sum(){
        return this.szamok.reduce((accumulator,currentvalue)=>{return accumulator + currentvalue});

    };
}
export let test1 = new Numbers([42,4,35,1]);
export let test2 = new Numbers([42]);
export let test3 = new Numbers([0]);
let test5 = new Numbers([8,4,2,4,6,78,4,33]);

console.log(test1);
console.log(test1.szamok);

console.log(test1.sum());
console.log(test2.sum());
