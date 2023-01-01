const userModel = require('../models/userModel')

const createUser = async function(req,res){
  
     let data = req.body
    const savedData = await userModel.create(data);
    res.send({msg : savedData})
}



module.exports.createUser = createUser