"use strict"
export{}

// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`

let name1:string = 'Greenfox';
function greet(input:string): string{
    return 'Greetings, dear ' + input;
}
console.log(greet(name1));
