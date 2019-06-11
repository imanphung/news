const db = require('../../model/model');
module.exports.tag = (req,res)=>{
    let tag;
    db.query("SELECT a.id AS id, a.name AS name, b.name AS nameCategory, b.id AS idCategory FROM tag a,category b WHERE a.idCategory = b.id",function(err,result){
        if(err) throw err;
        tag=result;
    });
    db.query("SELECT * FROM category ORDER BY oder ASC",function(err,category){
        if(err) throw err;
        res.render('admin/adminPage/tag',{tag,category});
    });
}
module.exports.addTag = (req,res)=>{
    var sql = "INSERT INTO tag(name,idCategory) VALUES('"+req.body.inputName+"','"+req.body.idCategory+"')";
    db.query(sql,function(err){
        if(err) throw err;
        res.redirect('/admin/tag');
    });
}
module.exports.deleteTag=(req,res)=>{
    var id= req.params.id;
    var sql="DELETE FROM tag WHERE id = "+id;
    db.query(sql,function(err){
        if(err) throw err;
        res.redirect('/admin/tag');
    });
}
module.exports.editTag=(req,res)=>{
    var id = req.params.id;
    var sql = "UPDATE tag SET name = '"+req.body.inputName+"',idCategory = '"+req.body.idCategory+"' WHERE id = '"+id+"'";
    db.query(sql,function(err,result){
        if(err) throw err;
        res.redirect('/admin/tag');
    });
}