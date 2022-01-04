var express = require('express');
var router = express.Router();
var viewsController = require('../controllers/viewsController');
var authController = require('../controllers/authController');

router.get('/', viewsController.index_pre);
router.get('/', authController.verifyAuth, viewsController.index_post);
router.get('/contacto', viewsController.contacto);
router.get('/login', viewsController.login);
router.get('/terminos', viewsController.terminos);

module.exports = router;