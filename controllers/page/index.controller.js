const db = require('../../model/model');
module.exports.getProducts = (req, res) => {
        db.query("SELECT * FROM category ORDER BY oder ASC",function(err,result){
            if(err) throw err;
            console.log('Session', req.session);
            res.render('page/index',{result,login:req.session.login, user:req.session.user});
        });   
};