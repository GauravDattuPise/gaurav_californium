const BookModel1 = require('../models/BookModel1')

const createBook = async function(req,res){
    let data = req.body
   if(data.author_id){
    let bookCreation = await BookModel1.create(data)
    res.send({msg : bookCreation})
   }
   else{
    res.send({msg : "you can not create book without author_id"})
   }
}

module.exports.createBook = createBook