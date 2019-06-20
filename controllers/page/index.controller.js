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
        db.query("SELECT * FROM posts a,category b WHERE a.id = 4 && a.idCategory = b.id",function(err,result){
            if(err) throw err;
            posts=result;
            
        });
        db.query("SELECT * FROM subcategory ORDER BY oder ASC",function(err,subcategory){
            if(err) throw err;
            console.log(req.session);
            res.render('page/index',{category,subcategory,posts,tag,login:req.session.login, user:req.session.user});
        });    
};

module.exports.Register=(req,res)=>{
    var email = req.body.email;
    var pw= req.body.pw;
    var register_err="Tên đăng nhập đã tồn tại"
    var sql = "SELECT * FROM subscriber WHERE email = '"+email+"'";
    db.query(sql,(err,result)=>{
        if(err) throw err;
        else if(result.length){
            res.redirect('/',{register_err});
        }
        
        else{
            var newUser = new Object();
            // newUser.id= profile._json.id,
            newUser.email=email,
            newUser.name=email
            db.query("INSERT INTO subscriber(email,password) VALUES ('"+email+"','"+pw+"')",(err)=>{
                if(err) throw err;
                req.user = newUser;
                
                res.redirect('/');
            });
        }
    });
}