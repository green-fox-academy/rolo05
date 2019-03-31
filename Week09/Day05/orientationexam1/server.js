'use strict';

require('dotenv').config();
let express = require('express');
let app = express();
let PORT = 3000;
let mysql = require('mysql');
let path = require('path');


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

app.post('/api/links', (req, res) => {
  let body = req.body;
  console.log(body);
  let secretcode = Math.floor((Math.random() * 9999) + 1000);
  connection.query(`SELECT * FROM shorturl WHERE alias = "${body.alias}";`, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    } else {
      if (result.length > 0) {
        res.status(400).send(result);
      } else {
        connection.query(`INSERT INTO shorturl (url,alias,secretCode) VALUES ("${body.url}","${body.alias}","${secretcode}");`, (err, data) => {
          if (err) {
            console.error(err);
            res.send(500).send();
            return;
          } else {
            connection.query(`SELECT * FROM shorturl WHERE alias = "${body.alias}";`,(err,result1) => {
              if(err){
                console.error(err);
                res.status(500).send();
              }else{
                res.status(200).send(result1);
              }
            })
          }
        })
      }
    }
  })
});

app.get('/a/:alias', (req, res) => {
  connection.query(`SELECT * FROM shorturl WHERE alias = "${req.params.alias}";`, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    } else {
      if (data.length === 0) {
        res.status(404).send({error:"error"});
      } else {
        connection.query(`UPDATE shorturl SET hitCount = hitCount + 1 WHERE alias = "${req.params.alias}";`, (err, data1) => {
          if (err) {
            console.error(err);
            res.status(500).send();
            return;
          } else {
            res.send(data1);
            res.redirect(`http://"${data.url}`);
          }
        })
      }
    }
  })
});

app.get('/api/links', (req, res) => {
  connection.query(`SELECT url,alias,hitCount FROM shorturl`, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    } else {
      res.send(data);
    }
  })
});

app.delete('/api/links/:id', (req, res) => {
  console.log(req.body.secretCode);
  connection.query(`SELECT * FROM shorturl WHERE id = "${req.params.id}";`, (err, data) => {
    console.log(data[0].secretCode);
    if (err) {
      console.error(err);
      res.status(500);
      return;
    } else{
      if (`${req.body.secretCode}` === `${data[0].secretCode}`) {
        connection.query(`DELETE FROM shorturl WHERE id = "${req.params.id}";`, (err, data1) => {
          if (err) {
            console.error(err);
            res.status(500).send();
            return;
          } else {
            res.status(204).send();
          }
        })
      } else if (`${req.body.secretCode}` !== `${data[0].secretCode}`) {
        res.status(403).send();
      } else {
        res.status(404).send();
      }
    }
  })
});
