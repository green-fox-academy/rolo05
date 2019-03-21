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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('assets'));
//app.set('view engine','ejs');


connection.connect(function (err) {
  err ? console.error('Error connecting to DB') :
    console.log('DB is connected');
});

app.listen(PORT, function () {
  console.log('The server works on localhost:3000!');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/start',function(req,res){
  connection.query()
})

app.get('/getsolution',function(req,res){
  let solution = req.body;
  connection.query(`SELECT id from questions WHERE id = "${solution.id}";`,function(err,data){
    if(err){
      console.log(err);
      return;
    }else{
      connection.query(`SELECT question_id from answers WHERE question_id = "${data.id}";`,function(err,data2){
        if(err){
          console.log(err);
          return;
        }else{
          connection.query(`SELECT is_correct from answers WHERE is_correct = "1";`,function(err,data3){
            if(err){
              console.log(err);
              return;
            }else{
              res.json(data3);
            }
          })
        }
      })
    }
  })
});

let questionID = 1;
app.get('/questions',function(req,res){
  connection.query(`SELECT id FROM question WHERE id = "${questionID}";`,function(err,data){
    questionID++;
    res.json(data);
  });
});
app.
/* app.post("/addnewquestion",function(req,res){
  connection.query('SELECT MAX(id) FROM question',function(err,data){
    let newID = newID++;
    connection.query(`INSERT INTO questions (id,question) VALUES ("${newID}","${req.body.question}");`,function(err,data){
      if(err){
        console.log(err);
        return;
      }else{
        connection.query(`SELECT is_correct FROM answers WHERE is_correct = 1`)
        for (let index = 0; index < 4; index++) {
          connection.query(`INSERT INTO answers (answer,id,is_correct,question_id) VALUES ("${req.body.answer[index]}","${req.body.id}","${newID * 4 + 1}","${}","${}")`)
          
        }
      }
    })
  })
})

 */

