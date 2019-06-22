const express = require('express');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
var upload = multer({ storage: storage }).single('image');
const controller = require('../../controllers/page/writer.controller');
const router = express.Router();
router.get('/',checkLevel,controller.getWrite);
router.get('/edit/:id',checkLevel,controller.editPost);
router.post('/addPosts',checkLevel,upload,controller.addPost);
router.post('/updatePost/:id',checkLevel,controller.updatePost);
function checkLevel(req, res, next) { 
  if (req.session.user.level===2) {
      next();
  } else {
      res.redirect('/');
  }
}
module.exports = router;