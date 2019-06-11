module.exports = {
    'facebookAuth': {
        'clientID': '2360314774240142', // App ID của bản
        'clientSecret': 'cd77d9f78f6e69e8007e1ad905dd5a7e', // App Secret của bạn
        'callbackURL': 'http://localhost:3000/auth/facebook/callback'
    },
    'twitterAuth': {
        'consumerKey': 'your-consumer-key-here',
        'consumerSecret': 'your-client-secret-here',
        'callbackURL': 'http://localhost:8080/auth/twitter/callback'
    },
    'googleAuth': {
        'clientID': 'your-secret-clientID-here',
        'clientSecret': 'your-client-secret-here',
        'callbackURL': 'http://localhost:3000/auth/google/callback'
    }
};