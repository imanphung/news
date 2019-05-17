const express = require('express');
const controller = require('../../controllers/page/categoryDetails.controller');
var router = express.Router();
router.use(express.static('public'));
router.get('/',controller.categoryDetails );
module.exports = router;