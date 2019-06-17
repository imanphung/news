const db = require('../../model/model');
module.exports.getProducts = (req, res) => {
        var category;
        db.query("SELECT * FROM category ORDER BY oder ASC",function(err,result){
            if(err) throw err;
            category=result;
        });
        var tag;
        db.query("SELECT * FROM tag ORDER BY id ASC",function(err,result){
            if(err) throw err;
            tag=result;
        });
        var posts;  
        db.query("SELECT * FROM posts a,category b WHERE a.id = 3 && a.idCategory = b.id",function(err,result){
            if(err) throw err;
            posts=result;
            
        });
        db.query("SELECT * FROM subcategory ORDER BY oder ASC",function(err,subcategory){
            if(err) throw err;
            res.render('page/index',{category,subcategory,posts,tag,login:req.session.login, user:req.session.user});
        });    
};