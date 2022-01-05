var express = require('express');
var router = express.Router();
var viewsController = require('../controllers/viewsController');
var authController = require('../controllers/authController');

router.get('/', authController.ifTrueRedirectInicio, viewsController.index_pre);
router.get('/login', authController.ifTrueRedirectInicio, viewsController.login);
router.get('/registro', authController.ifTrueRedirectInicio, viewsController.registro);

router.get('/index_post', authController.ifFalseRedirectLogin, viewsController.index_post);
router.get('/alquilar_1', authController.ifFalseRedirectLogin, viewsController.alquilar_1);
router.get('/alquilar_2', authController.ifFalseRedirectLogin, viewsController.alquilar_2);
router.get('/alquilar_3', authController.ifFalseRedirectLogin, viewsController.alquilar_3);
router.get('/alquilar_4', authController.ifFalseRedirectLogin, viewsController.alquilar_4);
router.get('/alquilar_5', authController.ifFalseRedirectLogin, viewsController.alquilar_5);

router.get('/contacto', authController.ifFalseRedirectLogin, viewsController.contacto);
router.get('/terminos', authController.ifFalseRedirectLogin, viewsController.terminos);

module.exports = router;