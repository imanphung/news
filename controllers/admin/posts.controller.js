
const db = require('../../model/model');
module.exports.posts = (req,res)=>{
    let posts ;
    db.query("SELECT * FROM posts",function(err,result){
        if(err) throw err;
        posts=result
    });

    db.query("SELECT * FROM category ORDER BY oder ASC",function(err,category){
        if(err) throw err;
        res.render('admin/adminPage/posts',{category,posts});
    });

}
module.exports.edit = (req,res)=>{
    let id = req.params.id ;
    var sql = "UPDATE posts SET articleStatus = 1 WHERE id = '"+id+"'";
    db.query(sql,function(err,result){
        if(err) throw err;
        res.redirect('/admin/posts');
    });

}
