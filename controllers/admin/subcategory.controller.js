const db = require('../../model/model');
module.exports.subcategory=(req,res)=>{
    var id=req.params.id;
    var sql= "SELECT * FROM subcategory WHERE idCategory = "+id+" ORDER BY oder ASC";
    db.query(sql,function(err,subcategory,feilds){
        if(err) throw err;
        res.render('admin/adminPage/subcategory',{subcategory});
    });
}
