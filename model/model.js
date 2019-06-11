const mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'newsdb'
});

mysqlConnection.connect((err)=>{
    if(!err)
        console.log('DB connection succeded \n');
    else
        console.log('DB connection fail \n Error :'+JSON.stringify(err,undefined,2));
});
module.exports=mysqlConnection;