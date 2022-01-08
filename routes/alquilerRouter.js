
var express = require('express');
var router = express.Router();

var authController = require('../controllers/authController')
var alquilerController = require('../controllers/alquilerController')

router.get('/alquilar_1', authController.ifFalseRedirectLogin, alquilerController.alquilar_1);
router.get('/alquilar_2/:id', authController.ifFalseRedirectLogin, alquilerController.alquilar_2);
router.post('/alquilar_3', authController.ifFalseRedirectLogin, alquilerController.post_alquilar_3);
router.get('/alquilar_3', authController.ifFalseRedirectLogin, alquilerController.alquilar_3);
router.post('/alquilar_4', authController.ifFalseRedirectLogin, alquilerController.post_alquilar_4);
router.get('/alquilar_4', authController.ifFalseRedirectLogin, alquilerController.alquilar_4);
router.post('/alquilar_5', authController.ifFalseRedirectLogin, alquilerController.post_alquilar_5);
router.get('/alquilar_5', authController.ifFalseRedirectLogin, alquilerController.alquilar_5);

module.exports = router;
