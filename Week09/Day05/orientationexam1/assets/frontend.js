'use strict';

window.onload = () => {

  let http = new XMLHttpRequest();
  http.open('GET', '/api/links', true);
  http.setRequestHeader('Content-Type', 'Application/json');
  http.onload = () => {
    let ul = document.querySelector('ul');
    let data = JSON.parse(http.responseText);
    console.log(data);
    for (let t = 0; t < data.length ; t++) {
      let newli = document.createElement('li');
      ul.appendChild(newli);
      newli.textContent = data[t].url;

    }
  }
  http.send();
}

let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  let url = document.querySelectorAll('input')[0];
  let alias = document.querySelectorAll('input')[1];
  event.preventDefault();
  event.stopPropagation();
  let http = new XMLHttpRequest();
  http.open('POST', '/api/links', true);
  http.setRequestHeader('Content-Type', 'Application/json');
  http.send(JSON.stringify({
    url: `${url.value}`,
    alias: `${alias.value}`
  }))

  http.onload = () => {
    let data = JSON.parse(http.responseText);
    console.log(data);
    let h3 = document.querySelectorAll('h3')[0];
    if (http.status === 400) {
      h3.textContent = "Your alias is alredy in use!"
      h3.style.color = "red";
    } else if (http.status === 200) {
      h3.textContent = `Your alias is "${data[0].alias}" and your secret code is "${data[0].secretCode}".`;
      alias.value = "";
      url.value = "";
    }
    let http2 = new XMLHttpRequest();
    http.open('GET', '/api/links', true);
    http.setRequestHeader('Content-Type', 'Application/json');
    http.onload = () => {
      let ul = document.querySelector('ul');
      let data = JSON.parse(http.responseText);
      console.log(data);
      for (let t = 0; t < data.length; t++) {
      let li = document.querySelector('li');
        li.textContent = data[t].url;

      }
    }
    http.send();
  }
});
