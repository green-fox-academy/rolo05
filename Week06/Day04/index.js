'use strict';
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.get('/',(req,res) => {res.sendFile(path.join( __dirname + '/index.html'))});
app.get('/about',(req,res)=> res.send('<h1>This is about</h1>');

app.listen(PORT,()=> {
  console.log(`Server is running on ${PORT}`);
});

//nodemon???package.json??