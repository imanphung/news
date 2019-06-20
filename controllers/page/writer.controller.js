const db = require('../../model/model');
module.exports.getWrite=(req,res)=>{
    let category,tag,posts
    db.query("SELECT * FROM category ORDER BY oder ASC",function(err,result){
        if(err) throw err;
        category=result;
    });
    db.query("SELECT * FROM tag ORDER BY id ASC",function(err,result){
        if(err) throw err;
        tag=result;
    });
    db.query("SELECT * FROM posts ORDER BY id ASC",function(err,result){
        if(err) throw err;
        posts=result;
        res.render('page/writer',{category,tag,posts,login:req.session.login, user:req.session.user});
    });
};
module.exports.addPost=(req,res)=>{
    var sql="INSERT INTO posts(title,image,abstract,content,date,articleStatus,idWriter,idCategory,idTag) VALUES('"+req.body.title+"','"+req.file.filename+"','"+req.body.abstract+"','"+req.body.editor+"','2019/5/28','0','1','"+req.body.idCategory+"','"+req.body.idTag+"')";
    db.query(sql,function(err,result){
        if(err) throw err;
        res.redirect('/writer');
    });
};
module.exports.editPost=(req,res)=>{
    var idPost = req.params.id;
    let category,tag
    db.query("SELECT * FROM category ORDER BY oder ASC",function(err,result){
        if(err) throw err;
        category=result;
    });
    db.query("SELECT * FROM tag ORDER BY id ASC",function(err,result){
        if(err) throw err;
        tag=result;
    });
    var sql="SELECT * FROM posts WHERE id = '"+idPost+"'";
    db.query(sql,function(err,post){
        if(err) throw err;
        res.render('page/postEdit',{post,category,tag,login:req.session.login, user:req.session.user});
    });
};
module.exports.updatePost=(req,res)=>{
    var idPost = req.params.id;
    var sql="UPDATE posts SET title = '"+req.body.title+"', abstract = '"+req.body.abstract+"', idCategory = '"+req.body.idCategory+"', idTag = '"+req.body.idTag+"', content = '"+req.body.editor+"', articleStatus=0 WHERE id = '"+idPost+"'";
    db.query(sql,function(err,post){
        if(err) throw err;
        res.redirect('/writer');
    });
};