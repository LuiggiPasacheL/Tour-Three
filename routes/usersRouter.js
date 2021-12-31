
var express = require('express');
var router = express.Router();
var userController = require('../controllers/userControllers');

router.get('/', userController.index)
router.post('/iniciar-sesion', userController.login)

module.exports = router;