// Once, all the apis are working fine, move the authentication related code in a middleware called auth.js
// - Add this middleware at route level in the routes where applicable.//

const myMiddle = async function(req,res,next){

    token = req.headers["x-auth-token"]
    if(!token) return res.send({status : true, msg : "Header not found"})

    next()
}

module.exports.myMiddle = myMiddle