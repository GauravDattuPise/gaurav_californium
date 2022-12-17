const bookModel = require('../models/bookModel')


const createNewBook = async function(req,res){
    let bookData = req.body
    let savedBookData = await bookModel.create(bookData)
    res.send({msg : savedBookData})
}
module.exports.createNewBook = createNewBook


const getAllBooks = async function(req,res){
    const getBooks = await bookModel.find()
    res.send({msg : getBooks})
}

module.exports.getAllBooks = getAllBooks

