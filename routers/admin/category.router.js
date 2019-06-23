const express= require('express');
const controller= require('../../controllers/admin/category.controller');
var router = express.Router();
router.get('/',controller.category);
router.get('/:id',controller.subcategory);
router.post('/add',controller.addCategory);
router.post('/edit/:id',controller.editCategory);
router.post('/delete/:id',controller.deleteCategory);

//Subcategory
router.post('/:idcategory/add',controller.addSubCategory);
router.post('/:idcategory/edit/:id',controller.editSubCategory);
router.post('/:idcategory/delete/:id',controller.deleteSubCategory);
module.exports = router;