'use strict';
export{}
let fs = require('fs');
function takefiles(fileName:string){
let fileContent = fs.readFileSync('readMe.txt', 'utf-8');
console.log(fileContent.rows.length)}