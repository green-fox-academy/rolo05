/* Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
Create a test for that. */
'use strict'

function textcompare(text1:string,text2:string){
    return text1.toLowerCase().split('').sort().join('') === text2.toLowerCase().split('').sort().join('')? true : false;
}
console.log(textcompare('vala','alav'));