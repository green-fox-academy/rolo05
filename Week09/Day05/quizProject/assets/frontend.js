let button1 = document.querySelectorAll('button')[0];

console.log(button1);

button1.addEventListener('click',function(event){
  
});

/* button1.addEventListener('submit',function(event){
  let http = new XMLHttpRequest();
  http.open('POST','http://localhost:3000/api/links',true);
  http.setRequestHeader('Content-Type','application/json');
  event.stopPropagation();
  event.preventDefault();
  http.send(JSON.stringify({
  url:`${input1.value}`,
  alias:`${input2.value}`,
  }));

  http.onload = () => {
    let content = JSON.parse(http.responseText);
    let body = document.querySelector('body');
    let newP = document.createElement('p');

    if(http.status === 200){
    body.appendChild(newP).textContent = `Your url is aliased to ${content.alias} and your secret code is ${content.secretCode}.`;

    }else{
      body.appendChild(newP).textContent = `Your alias is alredy in use!`;
    }
  }
}); */