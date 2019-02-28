'use strict';
const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  //res.sendFile(__dirname + '/index.html'); /* g */
  // render `home.ejs`

  res.render('home', {
    title: 'Bye World!',
    title1:'Yolo Man',
    title2:'Lets try to be familiar with this...'
  });
});
// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});