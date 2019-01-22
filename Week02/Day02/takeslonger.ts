'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.';
let array1 = quote.split(' ');

array1.splice(3, 0 ,'always takes longer than');





console.log(array1 );

