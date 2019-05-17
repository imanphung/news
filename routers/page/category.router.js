const express = require('express');
const controller = require('../../controllers/page/category.controller');
var router = express.Router();
router.use(express.static('public'));
router.get('/',controller.category);
module.exports = router;