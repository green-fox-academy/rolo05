'use strict'

const express = require('express');
const app = express();
const PORT = 5050;
const path = require('path');

app.use('/assets', express.static('assets'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/doubling',function(req,res){
  res.send(
    req.query.input
    ? {
      received: Number(req.query.input),
      result: Number(2*req.query.input),
    }
    :{
    error:"Please provide an input!",
    }
);

app.get('/greeter?', (req, res) => {
  const { name, title } = req.query;

  if (!name) {
    res.send({ error: 'Please provide a name!' });
  }

  if (!title) {
    res.send({ error: 'Please provide a title!' });
  }

  res.send({
    welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
  });
});

app.get('/appenda/:appendable',(req,res) => {
  const {title} = req.query;
  if(!title){
    res.send('Not Found');
  }else{
    res.send('appended:' + title + 'a');
  }
});

app.listen(PORT,() =>{
  console.log(`it runs`);
});

