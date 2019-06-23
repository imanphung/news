const express = require('express');
const controller= require('../../controllers/admin/tag.controller');
var router = express.Router();
router.get('/',controller.tag);
router.post('/addTag',controller.addTag);
router.post('/edit/:id',controller.editTag);
router.get('/deleteTag/:id',controller.deleteTag);
module.exports = router;