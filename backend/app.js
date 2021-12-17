
const express = require('express');
const app = express();
const db = require('./db');

const UserController = require('./controllers/UserController');
app.use('/users', UserController);

const AuthController = require('./controllers/AuthController');
app.use('/api/auth', AuthController);

module.exports = app;