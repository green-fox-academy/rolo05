// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

'use strick'

import { appendFile } from "fs";

export { }
let fs = require('fs');
function writeMyName(fileName: string,) {
    try {
        fs.readFileSync(fileName, 'utf-8');
        fs.writeFileSync('my-file.txt', 'Szabo Roland','utf-8');

    } catch (errors) {
        console.log('Unable to write file: my-file.txt');
    }
}
writeMyName('my-file.txt');
