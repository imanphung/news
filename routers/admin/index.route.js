const express = require('express');
const controller = require('../../controllers/admin/index.controller');
var router = express.Router();
router.get('/',controller.adminProducts);
module.exports = router;