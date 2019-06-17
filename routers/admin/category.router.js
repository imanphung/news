const express= require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const controller= require('../../controllers/admin/category.controller');
var router = express.Router();
router.get('/',controller.category);
router.get('/:id',controller.subcategory);
router.post('/add',urlencodedParser,controller.addCategory);
router.post('/edit/:id',urlencodedParser,controller.editCategory);
router.post('/delete/:id',urlencodedParser,controller.deleteCategory);

//Subcategory
router.post('/:idcategory/add',urlencodedParser,controller.addSubCategory);
router.post('/:idcategory/edit/:id',urlencodedParser,controller.editSubCategory);
router.post('/:idcategory/delete/:id',urlencodedParser,controller.deleteSubCategory);
module.exports = router;