// load những thứ chúng ta cần
var FacebookStrategy = require('passport-facebook').Strategy;
// Lấy thông tin những giá trị auth
var configAuth = require('./auth');
// load  user model
var db = require('../model/model');
module.exports = function (passport) {
    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session
    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user);
        
    });
    // used to deserialize the user
    passport.deserializeUser(function (user, done) {
        done(null, user)
    });
    // code for login (use('local-login', new LocalStategy))
    // code for signup (use('local-signup', new LocalStategy))
    // =========================================================================
    // FACEBOOK ================================================================
    // =========================================================================
    passport.use(new FacebookStrategy({
            // điền thông tin để xác thực với Facebook.
            // những thông tin này đã được điền ở file auth.js
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

                        // newUser.id= profile._json.id,
                        newUser.email=profile._json.email,
                        newUser.name=profile._json.name
                    }
                    db.query("INSERT INTO subscriber(email,name) VALUES('"+profile._json.email+"','"+profile._json.name+"')",function(err,result){
                        if(err) return done(err);
                        else{
                            return done(null,newUser);
                        }
                        
                    });
                 
            });
        }));
};