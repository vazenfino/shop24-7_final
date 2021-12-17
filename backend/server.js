// creating an API server which is utilized by Angular server

const app = require('./app');
const express = require('express');
const port = process.env.PORT || 3005;

// for getting the form data from angular
const bodyParser =  require('body-parser');

// for maintaining authorization
const session = require('express-session');

app.use(session({secret: 'edurekaSecert'}));

const server = app.listen(port, () => {
    console.log('Express server listening on port ' + port);
  });