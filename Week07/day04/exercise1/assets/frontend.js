'use strict';
let http = new XMLHttpRequest();

let body = document.getElementsByClassName('FirstOne')[0].getElementsByTagName('ul')[0];
http.open('GET', book_title);
http.onload = () => {
  let newU1 = document.createElement('ul');
  newU1.setAttribute('id', 'booklist');
  let books = JSON.parse(http.responseText);
  console.log(books);
  h1.innerText = 'Our books';
}

function getText(data) {
  for (let index = 0; index < data.length; index++) {
    var node = document.createElement("LI");
    console.log(node);
    var textnode = document.createTextNode(data[index]);
    console.log(textnode);
    node.appendChild(textnode);
    body.appendChild(node);
  }
}
