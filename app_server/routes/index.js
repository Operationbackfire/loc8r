var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
//test
//var yourmodule = require('./yourmodule');



//yourmodule.logThis("Hooray, it works!");

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
