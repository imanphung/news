var express = require('express');
var controller = require('../../controllers/page/editor.controller');
var router = express.Router();
router.get('/',checkLevel,controller.getEditor);
router.get('/view/:id',checkLevel,controller.View);
router.post('/reject/:id',checkLevel,controller.Reject);
router.post('/addPost/:id',checkLevel,controller.addPost);
function checkLevel(req, res, next) { 
    if (req.session.user.level===1) {
        next();
    } else {
        res.redirect('/');
    }
}
module.exports = router;