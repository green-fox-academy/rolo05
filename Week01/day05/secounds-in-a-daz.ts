'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables




let resthours: number = 24 - currentHours;
let restMinutes: number = 60 - currentMinutes;
let restSeconds: number = 60 - currentSeconds;

console.log(resthours * 60 * 60 + restMinutes * 60 + restSeconds + '     have we still from the day!');
