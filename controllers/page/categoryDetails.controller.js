const db = require('../../model/model');
module.exports.categoryDetails = (req, res) => {  
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
    db.query("SELECT * FROM subcategory ORDER BY oder ASC",function(err,subcategory){
        if(err) throw err;
        res.render('page/categoryDetails',{category,subcategory,tag,login:req.session.login, user:req.session.user,errLogin});
    }); 

};