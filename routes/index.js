var express = require('express');
var router = express.Router();
var usersRouter = require('./usersRouter');

router.get('/', function(req,res){
  res.render('login');
})

router.use('/users', usersRouter);

module.exports = router;
