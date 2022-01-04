
var express = require('express');
var router = express.Router();
var userController = require('../controllers/userControllers');
var authController = require('../controllers/authController')

router.get('/:id', userController.getForId)
router.post('/iniciar-sesion', userController.login)
router.post('/terminar-sesion', userController.logout)
router.get('/oculto', authController.ifFalseRedirectLogin, (req,res) => {
    res.send('login correcto')
})

module.exports = router;