const express = require('express');
const router = express.Router();
const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
const app = express();
// For parsing form
const bodyParser = require('body-parser');
// For generating Token
const jwt = require('jsonwebtoken');
// For encrypting Password
const bcrypt = require('bcryptjs');
// For Secert Token
const config = require('../config');
// For User Schema
const User = require('../models/order.model');
const session = require('express-session');


router.use(session({
    secret: 'edurekaSecert1',
    resave: false,
    saveUninitialized: true
  }));


  router.post('/register',function(req,res){
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
     
    User.create({
        name:req.body.name,
        email: req.body.email,
        password: hashedPassword
    }, function (err,user){
        if (err){
            return res.status(500).send("There was a problem registering the user.")
        } else{
            // const token =  jwt.sign({
            //     id: user._id
            //   }, config.secret, {
            //     expiresIn: 86400 // expires in 24 hours
            //   });
              res.send("user registered successfully")
        }

    })

  })

  // Login User
router.post('/login', function(req, res) {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) return res.status(500).send('Error on the server.');
    const string = encodeURIComponent('! Please enter valid value');
    if (!user) {
    
    } else {
      const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) return res.status(401).send({
          auth: false,
          token: null
        });
      var token = jwt.sign({
        id: user._id
      }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      localStorage.setItem('authtoken', token)
  
    }
  });
});

  module.exports = router;