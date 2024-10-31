const passport = require('passport')
const User = require('../models/user');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;



//setup options for jwt strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: 'anysecretstring'
};



//create jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){

    User.findById(payload.sub,function(err,user){
        if(err){
            return done(err,false);
        }

        if(user){
            done(null, user);
        }else{
            done(null, false);
        }
    })
});

passport.use(jwtLogin);