const db = require('../../model/model');
module.exports.categoryDetails = (req, res) => {
    db.query("SELECT * FROM category ORDER BY oder ASC",function(err,result){
        if(err) throw err;
        res.render('page/categoryDetails',{result});
    });
};