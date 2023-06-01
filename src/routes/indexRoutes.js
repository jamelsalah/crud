const express = require('express');
const router = express.Router();

const indexController = require('../controllers/pessoaController');

router.get('/', indexController.listarView);

module.exports = router;