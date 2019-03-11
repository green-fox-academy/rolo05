'use strict';
let firstClick = document.getElementsByTagName('button')[0];
let current = 0;
function getTheTime() {
  let now = Date.now()
  if(current == 0){
    current+=1;
    console.log(now)};
};


firstClick.addEventListener('click', getTheTime);
  /* //e.preventDefault()
let ptag = document.createElement('p');
ptag.innerHTML = 'valami';
document.querySelector('p').appendChild(ptag);
console.log('dfgh');
}); */
