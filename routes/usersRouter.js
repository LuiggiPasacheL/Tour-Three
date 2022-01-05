
var express = require('express');
var router = express.Router();
var userController = require('../controllers/userControllers');
var authController = require('../controllers/authController')

router.post('/iniciar-sesion', authController.ifTrueRedirectInicio, userController.login)
router.post('/terminar-sesion', authController.ifFalseRedirectLogin, userController.logout)
router.get('/oculto', authController.ifFalseRedirectLogin, (req,res) => {
    res.send('login correcto')
})
router.post('/registro', authController.ifTrueRedirectInicio, userController.register)
router.get('/:id([0-9])', userController.getForId)

module.exports = router;
