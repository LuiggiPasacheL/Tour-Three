var express = require('express');
var router = express.Router();
var viewsRouter = require('./viewsRouter');
var usersRouter = require('./usersRouter');

router.use('/',viewsRouter);
router.use('/users', usersRouter);

module.exports = router;
