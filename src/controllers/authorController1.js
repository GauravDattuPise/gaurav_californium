let authorModel1 = require('../models/authorsModel1')

let createAuthor = async (req,res) => {
    authorData = req.body
    if(authorData.author_id){

    let authorCreation = await authorModel1.create(authorData)
    res.send({msg : authorCreation})
    }
    else{
        res.send({msg : "You can not create object withot author_id"})
    }


}

module.exports.createAuthor = createAuthor