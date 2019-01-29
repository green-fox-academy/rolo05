// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strick'
export { }
let fs = require('fs');
function takefiles(fileName: string) {
    try {
        let fileContent = fs.readFileSync(fileName, 'utf-8');
        console.log(fileContent.split('\n').length);
    } catch (errors) {
        console.log('0');
    }
}
takefiles('readMe.txt');