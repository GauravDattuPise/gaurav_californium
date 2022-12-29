// Once, all the apis are working fine, move the authentication related code in a middleware called auth.js
// - Add this middleware at route level in the routes where applicable.//
const jwt = require("jsonwebtoken")

const myMiddle = async function(req,res,next){

    token = req.headers["x-auth-token"]
    if(!token) return res.send({status : true, msg : "Header not found"})
    req.id = token
    next()
}

module.exports.myMiddle = myMiddle

module.exports.myMiddle2 = async function(req,res,next){

       let validateTok = jwt.verify(token, "I-am-trainee-at-FunctionUp");
       if(!validateTok) return res.send({status :false, msg : "Token is wrong"})
       
       let userModify = req.params.userId
       let userIn = validateTok.userId

       if(userModify != userIn)return res.send({status : false, msg : "Invalid token or userId"})

       next()
    }