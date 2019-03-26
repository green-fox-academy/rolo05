'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const path = require('path');
app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'bookstore',
});

/* conn.connect((err) => {
  if (err) {
    console.log('Error connecting to DB');
    console.error();
    return;
  }
  console.log('DB is connected');
});  */
//conn.end();
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./index.html'));
  });

app.get('/book_title', (req, res) => {
  conn.query('SELECT book_name from book_mast;', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
    console.log(`${rows} is the ID`);
  });
});

/* app.post('/newtask', (req, res) => {
  let SQL = `INSERT INTO tasks (title, done) VALUES
  ('${req.body.title}', ${req.body.done});`;

  conn.query(SQL, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      }
    SQL = `SELECT * FROM tasks WHERE id=${rows.insertId};`;

      conn.query(SQL, (err, rows) => {
        if (err) {
          console.error(err);
          res.status(500).send();
          return;
        };
        res.send(rows);
      })
    })
});
*/
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});