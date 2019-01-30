// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
'use strict'
let fs = require('fs');

function filecopy(whichfile: string, wherefile: string) {
    try {
        fs.writeFileSync(wherefile, whichfile, 'utf-8');
        console.log('True');
    } catch{
        console.log('False');
    }
}
filecopy('read.txt','my-file.txt');

