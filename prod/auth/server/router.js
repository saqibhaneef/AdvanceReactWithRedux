const Authentication = require('./controllers/authentication')

module.exports = function(app){
    app.get('/', function(req, res, next){
        res.send(['string1','string2'])
    });
    app.post('/signup',Authentication.signup);
}