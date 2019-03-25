'use strict';
const express = require('express');
const app = express();
const PORT = 5050;

app.get('/',function(req,res){
  res.sendFile(__dirname + '/project.html');
});


app.use('/assets',express.static('assets'));


app.listen(PORT, () => {
  console.log(`Runing on port ${PORT}`);
});

let button = document.querySelectorAll('.box');
button.forEach(box => {
  box.onclick = () => {
    alert('yes');
  }
});