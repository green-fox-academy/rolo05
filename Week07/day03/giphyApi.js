var http = new XMLHttpRequest();

let body = document.querySelector('body');

function getGift(data){
  for (let index = 0; index < data.data.length; index++) {
    console.log(data.data[index].images.original.url);
    let image = document.createElement("img");                 // Create a <li> node
    image.setAttribute('src',data.data[index].images.original.url);
    body.appendChild(image);                              // Append the text to <li>
  }
}

http.onreadystatechange = function(){
  if(http.readyState === 4 && http.status === 200){
    getGift(JSON.parse(http.response));
  }
}
http.open('GET','http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=AdA2gMSPt9jnTm0qKtk1rKY9HqOLXmny&limit=16',true);
http.send();
