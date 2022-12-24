const PublisherModel = require('../models/publisherModel')

let createPublisher = async function(req,res){
    let data = req.body
    const publisher = await PublisherModel.create(data)
    res.send({msg : publisher})
}

module.exports.createPublisher = createPublisher