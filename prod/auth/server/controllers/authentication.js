const jwt = require('jwt-simple')
const User = require("../models/user")

function tokeForUser(user){
    const timeStamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat:timeStamp },"anysecretstring")
}

exports.signin = function(req, res, next){
    res.send({token: tokeForUser(req.user)})
}

exports.signup = function(req,res,next){
    const email = req.body.email;
    const password = req.body.password;

    if(!password || !email){
        return res.status(422).send({error:'You must provide email and password'})
    }
    //res.send([email,password])
    User.findOne({email: email}, function(err,existingUser){
        if(err){
            return next(err);
        }

        if(existingUser){
            return res.status(422).send({error: 'Email is in use'});
        }

        const user = new User({
            email: email,
            password: password
        });

        user.save(function(err){
            if(err){
                return next(err);
            }
            res.json({success: true, token: tokeForUser(user) });
        });
    })

}