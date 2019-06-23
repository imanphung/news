const db = require('../../model/model');
module.exports.getProducts = (req, res) => {
        var errLogin=req.flash();
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
        db.query("SELECT * FROM posts a,category b WHERE a.idCategory = b.id",function(err,result){
            if(err) throw err;
            posts=result;
            
        });
        var newposts;
        db.query("SELECT a.image AS image,a.title AS title,b.name AS categoryName,c.name AS tagName,a.date AS date, a.abstract AS abstract FROM posts a,category b,tag c WHERE a.idCategory = b.id && a.idTag = c.id ORDER BY a.date LIMIT 0,10",function(err,result){
            if(err) throw err;
            newposts=result;
            for(var i=0;i<result.length;i++){
                let year = result[i].date.getFullYear();
                let month = (1 + result[i].date.getMonth()).toString().padStart(2, '0');
                let day = result[i].date.getDate().toString().padStart(2, '0');
                newposts[i].date = day + '/' + month + '/' + year;
            }
        });
        db.query("SELECT * FROM subcategory ORDER BY oder ASC",function(err,subcategory){
            if(err) throw err;
            res.render('page/index',{newposts,category,subcategory,posts,tag,login:req.session.login, user:req.session.user,errLogin});
        });    
};
