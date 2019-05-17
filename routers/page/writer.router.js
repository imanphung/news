const express = require('express');
const controller = require('../../controllers/page/writer.controller');
const router = express.Router();
router.get('/',controller.getWrite);
module.exports = router;