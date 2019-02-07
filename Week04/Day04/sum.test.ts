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

import { Numbers, test1, test2,test3 } from './sum';
let test = require('tape').test;
let newemptyarray:number[] = [];

test('summTheElements', t => {
    t.equal(test1.sum(), 82);
    t.end();
} );
test('summTheElements', t => {
    t.equal(test2.sum(), 42);
    t.end();
} );
test('summTheElements', t => {
    t.equal(test3.sum(), 4);
    t.end();
} );

test('summTheElements', t => {
    t.equal(test3.sum(), 'stringindahaus');
    t.end();
} );
