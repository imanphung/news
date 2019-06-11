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
