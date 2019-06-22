const db = require('../../model/model');
module.exports.userlist = (req,res)=>{
    let categoryEditor;
    db.query("SELECT c.name AS name, e.id AS id FROM editor e,category c WHERE e.idCategory = c.id",function(err,result){
        if(err) throw err;
        categoryEditor=result;
    });
    let editorlist;
    db.query("SELECT * FROM subscriber WHERE level=1",function(err,result){
        if(err) throw err;
        editorlist=result;
    });
    let writerlist;
    db.query("SELECT * FROM subscriber WHERE level=2",function(err,result){
        if(err) throw err;
        writerlist=result;
    });
    db.query("SELECT * FROM category ORDER BY oder ASC",function(err,category){
        if(err) throw err;
        res.render('admin/adminPage/userlist',{category,writerlist,editorlist,categoryEditor});
    });
}
module.exports.add = (req,res)=>{
    db.query("INSERT INTO subscriber(email,name,password,level) VALUES('"+req.body.email+"','"+req.body.name+"','"+req.body.password+"','"+req.body.level+"')",function(err,category){
        if(err) throw err;
        res.redirect('/admin/userlist');
    });

}
module.exports.delete = (req,res)=>{
    var id= req.params.id;
    db.query("DELETE FROM subscriber WHERE id='"+id+"'",function(err,category){
        if(err) throw err;
        res.redirect('/admin/userlist');
    });
}
module.exports.addCategory = (req,res)=>{
    var idCategory = req.body.idCategory;
    var idEditor =req.body.idEditor;
    db.query("DELETE FROM editor WHERE id='"+idEditor+"'",function(err,category){
        if(err) throw err;
    
    });
        db.query("INSERT INTO editor(id,idCategory) VALUES('"+idEditor+"','"+idCategory+"')",function(err,result){
            if(err) throw err;
            res.redirect('/admin/userlist');
        });
}