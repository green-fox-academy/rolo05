'use strict';
var express = require('express');
var app = express();
var PORT = 3000;
var mysql = require('mysql');
//var path = require('path');

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

/* app.use('/assets', express.static('assets'));
app.use(express.json()); */

app.set('view engine','ejs');

/* connection.connect(function (err) {
  err ? console.error('Error connecting to DB') :
    console.log('DB is connected');
}); */
const todos = [
  'get up',
  'survive',
  'go back to bed',
];

app.get('/', function (req, res) {
  res.render('front',{list:todos});
});

 app.listen(PORT, function () {
  console.log('The server works on localhost:3000!');
});
/*
app.get('/list',function(req,res){
  const todos = [
    'get up',
    'survive',
    'go back to bed',
  ];
  res.render('front', todos);
})

/* app.get('/post',function(req,res){
  connection.query('SELECT * from users',function(err,rows){
    if(err){
      console.log(err);
      res.status(500).send('Database error');
      return;
    }
    res.send(rows);
  })
})
app.post('/posts',function(req,res){
  let body = req.body;
  connection.query(
    'INSERT INTO (name , age , picture)'
  )
})

 */ 