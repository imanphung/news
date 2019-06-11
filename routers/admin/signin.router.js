const express = require('express');
const controller = require('../../controllers/admin/singin.controller');
var router=express.Router();
module.exports = router.get('/',controller.signin);