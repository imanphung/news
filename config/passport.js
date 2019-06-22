// load những thứ chúng ta cần
var FacebookStrategy = require('passport-facebook').Strategy;
// Lấy thông tin những giá trị auth
var configAuth = require('./auth');
// load  user model
var db = require('../model/model');
module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user);
        
    });
    // used to deserialize the user
    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    passport.use(new FacebookStrategy({
            clientID: configAuth.facebookAuth.clientID,
            clientSecret: configAuth.facebookAuth.clientSecret,
            callbackURL: configAuth.facebookAuth.callbackURL,
            profileFields: ['id','displayName','email']
        },
        // Facebook sẽ gửi lại chuối token và thông tin profile của user
        function (token, refreshToken, profile, done) {
            // asynchronous
            db.query("SELECT * FROM subscriber WHERE email = '"+profile._json.email+"'",function(err,rows){
                if(err) return done(err);
                // res.render('admin/adminPage/category',{category});
                if(rows.length){
                    return done(null,rows[0]);
                }else{
                    var newUser = new Object();

                        newUser.id= profile._json.id,
                        newUser.email=profile._json.email,
                        newUser.name=profile._json.name
                    }
                    db.query("INSERT INTO subscriber(email,name,level) VALUES('"+profile._json.email+"','"+profile._json.name+"','0')",function(err,result){
                        if(err) return done(err);
                        else{
                            return done(null,newUser);
                        }
                        
                    });
            });
        }));
};