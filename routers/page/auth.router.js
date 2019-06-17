module.exports = function (app, passport){
    app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));
        // xử lý sau khi user cho phép xác thực với facebook
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/writer',
            failureRedirect: '/'
        })
    );
}