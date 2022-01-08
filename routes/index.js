var express = require('express');
var router = express.Router();
var viewsRouter = require('./viewsRouter');
var usersRouter = require('./usersRouter');
var alquilerRouter = require('./alquilerRouter')

router.use('/', viewsRouter);
router.use('/users', usersRouter);
router.use('/', alquilerRouter);

module.exports = router;
