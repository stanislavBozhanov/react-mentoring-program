const path = require('path');
const express = require('express');


const app = express();


app.use(express.static(__dirname + '../'));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

module.exports =  app;
