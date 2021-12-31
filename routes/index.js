var express = require('express');
var router = express.Router();
var usersRouter = require('./usersRouter');

router.get('/', function(req,res){
  res.render('index', {title: 'Tour Three'})
})

router.use('/users', usersRouter);

module.exports = router;
