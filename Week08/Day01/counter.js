'use strict';

let list = document.getElementsByTagName('li');

/* function getTheListOfNumber(){
  let currentNumber = 0;
  for (let index = 0; index < list.length; index++) {
    currentNumber ++;
    
  }return currentNumber;
} */
let p = document.getElementsByTagName('p')[0];
let button = document.getElementsByTagName('button')[0];

button.addEventListener('click',()=> {
  if(list == [] || list == NaN){
    p.textContent = 0;
  }else{
    //p.textContent = getTheListOfNumber();
    p.textContent = list.length;
  }
});


