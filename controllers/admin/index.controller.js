const db = require('../../model/model');
module.exports.adminProducts = (req, res) => {
    db.query("SELECT * FROM category ORDER BY oder ASC",function(err,category,feilds){
        if(err) throw err;
        res.render('admin/adminPage/index',{category});
    });
};