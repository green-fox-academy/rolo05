'use strict';

let a: number = 3;
// make it bigger by 10
a = a + 10;
console.log(a);

let b: number = 100;
// make it smaller by 7
b = b + a

console.log(b);

let c: number = 44;
// double c's value
c *= 2

console.log(c);

let d: number = 125;
// divide d's value by 5
d /= 5
console.log(d);

let e: number = 8;
// what's the cube of e's value?
console.log(Math.pow(8,3));

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
if (f1 < f2){
    console.log( 'Yooo, the value of f1 is less!' )
}

let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (pras a boolean)
if (g2 * 2 > g1){
    console.log('True, double of g2 is greater than simple g1')
}
let h: number = 1357988018575474;
// tell if 11 is a divisor of h (as a boolean)

console.log( h % 11);
if(h % 11 === 0){

    console.log('Yeah, number h is divisible without rest')
}

let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
if (i1 > i2 * i2 && i1 < i2 * i2 * i2){
    console.log('True!')
}

let j: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)
if(j % 3 === 0 || j % 5 === 0){
    console.log('Yeah, number j divisible with 3 or 5!')
}


let k: string = 'Apple';
// fill the k variable with its content 4 times

console.log(k+k+k+k + '   Voila!!');
