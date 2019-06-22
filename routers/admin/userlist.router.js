const express = require('express');
const controller= require('../../controllers/admin/userlist.controller');
var router = express.Router();
router.get('/',controller.userlist);
router.get('/delete/:id',controller.delete);
router.post('/add',controller.add);
router.post('/addCategory',controller.addCategory);
module.exports = router;