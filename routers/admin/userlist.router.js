const express = require('express');
const controller= require('../../controllers/admin/userlist.controller');
var router = express.Router();
router.get('/',controller.userlist);
module.exports = router;