var express = require('express');
var router = express.Router();
var viewsController = require('../controllers/viewsController');
var authController = require('../controllers/authController');

router.get('/terminos', viewsController.terminos);

router.get('/', authController.ifTrueRedirectInicio, viewsController.index_pre);
router.get('/login', authController.ifTrueRedirectInicio, viewsController.login);
router.get('/registro', authController.ifTrueRedirectInicio, viewsController.registro);

router.get('/index_post', authController.ifFalseRedirectLogin, viewsController.index_post);
router.get('/contacto', authController.ifFalseRedirectLogin, viewsController.contacto);

module.exports = router;