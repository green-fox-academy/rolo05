'use strict';

/* let button1 = document.getElementsByTagName('input');
let button2 = document.getElementsByTagName('input');
let button3 = document.getElementsByTagName('input');
let button4 = document.getElementsByClassName('div3');
let button5 = document.getElementsByClassName('div4');*/
let buttonbutton = document.querySelectorAll('button');
let button1 = document.querySelectorAll('input');

//let button2 = document.querySelectorAll('input')[0];


button1[0].addEventListener('click',function(e){
  buttonbutton[0].removeAttribute('disabled');
});
document.querySelectorAll('input')[1].addEventListener('click',function(e){
buttonbutton[0].removeAttribute('disabled')
});
document.querySelectorAll('input')[2].addEventListener('click',function(e){
  document.querySelectorAll('button')[1].removeAttribute('disabled');
});

buttonbutton[0].addEventListener('click',function(e){
  window.alert('Thanks for nothing Bro!')
});
