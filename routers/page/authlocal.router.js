module.exports = function (app, passport){
    app.post('/signup', passport.authenticate('local-signup',{
        successRedirect: '/',
        failureRedirect: '/'
    }));

    app.post('/login', passport.authenticate('local-login',{
        failureRedirect: '/'
    }),(req,res)=>{
        if(req.user.level===1){
            res.redirect('/editor');
        }
        else if(req.user.level===2){
            res.redirect('/writer');
        }
        else{
            res.redirect('/');
        }
    });
}