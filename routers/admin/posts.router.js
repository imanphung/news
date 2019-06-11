const express = require('express');
const controller= require('../../controllers/admin/posts.controller');
var router = express.Router();
router.get('/',controller.posts);
module.exports = router;