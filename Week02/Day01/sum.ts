"use strict"
export{}

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result
let b:number = 4

function sum(number){
    let result = 0;

    for(let i = 0; i<= number; i++){
        result = result + i;
console.log(result);
    }

    return(result);
    
    }
    console.log(sum(b));

    
