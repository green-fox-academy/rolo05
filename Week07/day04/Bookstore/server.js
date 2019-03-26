'use strict';

require('dotenv').config();
var express = require('express');
var app = express();
var PORT = 3000;
var mysql = require('mysql');
var path = require('path');

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  
});

app.use(express.json());
app.use('/assets', express.static('assets'));
//app.set('view engine','ejs');
app.get('/',(req,res)=> {
  res.sendFile(path.join(__dirname + '/index.html'));
});

connection.connect(function (err) {
  err ? console.error('Error connecting to DB') :
    console.log('DB is connected');
});

app.listen(PORT, function () {
  console.log('The server works on localhost:3000!');
});

/*  app.get('/', function (req, res) {
  res.render('front',)
});*/

app.get('/booknames', function(req, res) {
  connection.query('SELECT book_name FROM book_mast;', function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.send(rows);

    /* let result = rows;
    newarray = [];
  result.forEach(element => {
    newarray.push( element.book_name);
    
  }); */
  });
});

/* app.get('/a/:alias', (req, res) => {
  const shortUrl = getShortUrlByAlias(req.params.alias);

  if (shortUrl.length > 0) {
    increaseHitCountByAlias(shortUrl[0].alias);
    res.redirect(shortUrl[0].url);
  } else {
    sendStatus(res, 404);
  }
});
app.get()
 */

/* app.get('/',function(req,res){
  res.send('Hello Word!');
}); */

/* app.get('/posts',function(req,res){
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