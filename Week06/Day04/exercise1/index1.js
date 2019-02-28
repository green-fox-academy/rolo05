'use strict';

const express = require('express');
const app = express();
const PORT = 5050;

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html'); /* g */
});
app.use('/assets',express.static('assets'));

app.listen(PORT,() =>{
  console.log(`it runs gehcc`);
});
