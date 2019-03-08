'use strict';

// The mapWith() function should iterate over the given array and call the callback function on every element.
// It stores the callback return values in the output.
// The mapWith() should return with the output array.

const mapWith = (array, callback) => {
  let output = [];

  array.forEach(function (e) {
    output.push(callback(e));
  });

  return output;
}

const addOne = (number) => {
  return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

/* let filtered = words.map(function (element) {
   return element.split("").filter(function (e, index) {
     if (index % 2 === 0){
       return e
     }
   }).join("");
 });

console.log(filtered); */

const removeSecondLetter = (string) => {
  let word = '';
  for(let i = 0; i < string.length; i++) {
    if ( i % 2 === 0) {
      word += string.charAt(i);
    }
  }
  return word
}

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle'] 
