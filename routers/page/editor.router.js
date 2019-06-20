var express = require('express');
var controller = require('../../controllers/page/editor.controller');
var router = express.Router();
router.get('/',controller.getEditor);
router.get('/view/:id',controller.View);
router.post('/reject/:id',controller.Reject);
router.post('/edit/:id',controller.Edit);
module.exports = router;