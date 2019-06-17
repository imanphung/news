const db = require('../../model/model');
module.exports.getEditor=(req,res)=>{
    var posts;
        db.query("SELECT p.id AS idPost, p.content AS Content ,p.title AS title, w.name AS writerName, c.name AS categoryName, p.articleStatus AS articleStatus FROM posts p, editor e, category c, writer w  WHERE p.idCategory = e.idCategory && e.id=1 &&c.id= e.idCategory && p.idWriter=w.id ORDER BY p.id ASC",function(err,result){
            if(err) throw err;
            posts = result;
            res.render('page/editor',{posts,login:req.session.login, user:req.session.user});
    }); 
};
module.exports.Reject=(req,res)=>{
    var idPost = req.params.id;
    var Reject = req.body.reject;
    var sql = "UPDATE posts SET articleStatus = -1, Reject = '"+Reject+"' WHERE id = '"+idPost+"'";
    db.query(sql,(err,result)=>{
        if (err) throw err;
        res.redirect('/editor');
    });
};
module.exports.View=(req,res)=>{
    var idPost = req.params.id;
    var sql = "SELECT * FROM posts WHERE id = '"+idPost+"'";
    db.query(sql,(err,post)=>{
        if (err) throw err;
        res.render('page/postView',{post,login:req.session.login, user:req.session.user});
    });
};