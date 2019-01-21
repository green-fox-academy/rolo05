"use strict"
export{}

// -  Create a function called `factorio`
//    that returns it's input's factorial

let b:number = 47

function sum(b){
    let a = 1;

    for(let i = 1; i<= b; i++){
        a = a * i;

    }

    return(a);
    
    }
    console.log(sum(b));
    
