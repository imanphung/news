var express = require('express');
var controller = require('../../controllers/page/editor.controller');
var router = express.Router();

module.exports = router.get('/',controller.getEditor);