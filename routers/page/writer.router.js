
const express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
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
router.get('/',controller.getWrite);
router.get('/edit/:id',controller.editPost);
router.post('/addPosts',urlencodedParser,upload,controller.addPost);
router.post('/updatePost/:id',urlencodedParser,upload,controller.updatePost);
module.exports = router;