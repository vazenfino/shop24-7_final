const express = require('express');
const router = express.Router();


// for form data
const bodyParser = require('body-parser');


// for auth
const LocalStorage = require('node-localstorage').LocalStorage;
const config = require('../config');
const jwt = require('jsonwebtoken');
localStorage = new LocalStorage('./scratch');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const User = require('../models/user.model');


// profile


router.get('/logout', (req,res) => {
    localStorage.removeItem('authtoken');
    res.redirect('/');
})

module.exports = router;