var LocalStrategy  = require('passport-local').Strategy;
// Lấy thông tin những giá trị auth
var configAuth = require('./auth');
// load  user model
var db = require('../model/model');
module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
		done(null, user);
    });
    passport.deserializeUser(function(user, done) {
		done(null, user);
    });
	

    // LOCAL SIGNUP 
 

    passport.use('local-signup', new LocalStrategy({
 
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true 
    },
    function(req, email, password, done) {

        db.query("select * from subscriber where email = '"+email+"'",function(err,rows){
			console.log(rows);
			console.log("above row object");
			if (err)
                return done(err);
			 if (rows.length) {
                return done(null, rows[0]);
            } else {

			
                var newUserMysql = new Object();
				
				newUserMysql.name = email;
            }
            db.query("INSERT INTO subscriber(email,password,level) VALUES('"+email+"','"+password+"','0')",function(err,result){
                if(err) return done(err);
                else{
                    return done(null,newUserMysql);
                }
                
            });
		});
    }));

    // LOCAL LOGIN 

    passport.use('local-login', new LocalStrategy({
        
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true 
    },
    function(req, email, password, done) {
        db.query("SELECT * FROM subscriber WHERE email = '"+email+"'",function(err,rows){
			if (err)
                return done(err);
            if(rows[0].password===password){
                var newUserMysql = new Object();
                newUserMysql.level = rows[0].level;
                newUserMysql.id = rows[0].id;
                if(rows[0].name===null){
                    newUserMysql.name = rows[0].email;
                    return done(null, newUserMysql);	
                }
                newUserMysql.name = rows[0].name;
                return done(null, newUserMysql);
            }
            else{
                return done(null, false, req.flash('loginMessage', 'Sai tên đăng nhập hoặc mật khẩu!'));
            }
		
		});
		
    }));

};
