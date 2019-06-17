const db = require('../../model/model');
module.exports.category=(req,res)=>{
    db.query("SELECT * FROM category ORDER BY oder ASC",function(err,category,feilds){
        if(err) throw err;
        res.render('admin/adminPage/category',{category});
    });
}

module.exports.deleteCategory=(req,res)=>{
    var id = req.params.id;
    var sql = "DELETE FROM category WHERE id = '"+id+"'";
    db.query(sql,function(err,result){
        if(err) throw err;
    });
    res.redirect('/admin/category');
}
module.exports.addCategory=(req,res)=>{
    var sql = "INSERT INTO category(oder,name) VALUES('"+req.body.inputOder+"','"+req.body.inputName+"')";
    db.query(sql,function(err,result){
        if(err) throw err;
    });
    res.redirect('/admin/category');
}
module.exports.editCategory=(req,res)=>{
    var id = req.params.id;
    var sql = "UPDATE category SET oder = '"+req.body.inputOder+"',name = '"+req.body.inputName+"' WHERE id = '"+id+"'";
    db.query(sql,function(err,result){
        if(err) throw err;
    });
    res.redirect('/admin/category');
}
//Subcategory
module.exports.subcategory=(req,res)=>{
    var idcategory = req.params.id;
    var sql = "SELECT * FROM subcategory WHERE idCategory="+idcategory+" ORDER BY oder";
    var category;
    db.query("SELECT * FROM category ORDER BY oder ASC",function(err,result){
        if(err) throw err;
        category=result;
    });
    db.query(sql,function(err,subcategory){
        if(err) throw err;
        res.render('admin/adminPage/subcategory',{subcategory,category,idcategory});
    });
}


module.exports.addSubCategory=(req,res)=>{
    var idcategory = req.params.idcategory;
    var sql = "INSERT INTO subcategory(oder,name,idCategory) VALUES('"+req.body.inputOder+"','"+req.body.inputName+"','"+idcategory+"')";
    db.query(sql,function(err,result){
        if(err) throw err;
    });
    res.redirect('/admin/category/'+idcategory);
}
module.exports.editSubCategory=(req,res)=>{
    var idcategory = req.params.idcategory;
    var idsubcategory= req.params.id;
    var sql = "UPDATE subcategory SET oder = '"+req.body.inputOder+"',name = '"+req.body.inputName+"',idCategory = '"+idcategory+"' WHERE id = '"+idsubcategory+"'";
    db.query(sql,function(err,result){
        if(err) throw err;
    });
    res.redirect('/admin/category/'+idcategory);
}
module.exports.deleteSubCategory=(req,res)=>{
    var idcategory = req.params.idcategory;
    var idsubcategory= req.params.id;
    var sql = "DELETE FROM subcategory WHERE id = '"+idsubcategory+"'";
    db.query(sql,function(err,result){
        if(err) throw err;
    });
    res.redirect('/admin/category/'+idcategory);
}