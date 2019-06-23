const db = require('../../model/model');
module.exports.getWrite=(req,res)=>{

    var errLogin=req.flash();
    var idWriter= req.session.user.id;
    let category,tag,posts
    db.query("SELECT * FROM category ORDER BY oder ASC",function(err,result){
        if(err) throw err;
        category=result;
    });
    db.query("SELECT * FROM tag ORDER BY id ASC",function(err,result){
        if(err) throw err;
        tag=result;
    });
  
    db.query("SELECT * FROM posts WHERE idWriter='"+idWriter+"' ORDER BY id ASC",function(err,result){
        if(err) throw err;
        posts=result;
        res.render('page/writer',{category,tag,posts,login:req.session.login, user:req.session.user,errLogin});
    });
};
module.exports.addPost=(req,res)=>{
    var calendar = new Date();
    var month = calendar.getMonth()+1;
    var date = calendar.getFullYear()+"-"+month+"-"+calendar.getDate()+" "+calendar.getHours()+":"+calendar.getMinutes()+":"+calendar.getSeconds();
    console.log(date);
    var idWriter= req.session.user.id;
    var sql="INSERT INTO posts(title,image,abstract,content,date,articleStatus,idWriter,idCategory,idTag) VALUES('"+req.body.title+"','"+req.file.filename+"','"+req.body.abstract+"','"+req.body.editor+"','"+date+"','0','"+idWriter+"','"+req.body.idCategory+"','"+req.body.idTag+"')";
    db.query(sql,function(err,result){
        if(err) throw err;
        res.redirect('/writer');
    });
};
module.exports.editPost=(req,res)=>{
    var idPost = req.params.id;
    let category,tag;
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
    console.log(req.body.idCategory);
    console.log(req.body.idCategory);
    var sql="UPDATE posts SET title = '"+req.body.title+"', abstract = '"+req.body.abstract+"', idCategory = '"+req.body.idCategory+"', idTag = '"+req.body.idTag+"', content = '"+req.body.editor+"', articleStatus=0 WHERE id = '"+idPost+"'";
    db.query(sql,function(err,post){
        if(err) throw err;
        res.redirect('/writer');
    });
};