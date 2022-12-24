const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

//  PROBLEM 3
// In this api, you have to write a logic that validates the following :
// The authorId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the authorId is a valid ObjectId in the author collection. A valid ObjectId in author collection means that a document must exist with this id. If not then send an error message that the author is not present.
// The publisherId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.


const createBook= async function (req, res) {
    let book = req.body
   let author_id = book.author_id
    let publisher_id = book.publisher_id

    if(!book.author_id){
       return res.send({msg :"author id is required"})
    }
   if(!book.publisher_id){
       return res.send({msg : "publisher id is required"})
    }


    const author_details = await authorModel.findOne({_id : author_id})
    //console.log(author_details)

    if(!author_details){
      return  res.send({status : false , msg : "author's object id is required"})
    }

    const publisher_details = await publisherModel.findOne({_id : publisher_id})
    if(!publisher_details){
       return res.send({status : false, msg : "publisher's object id is required"})
    }
    
        let bookCreated = await bookModel.create(book)
        res.send({data: bookCreated})
    
}


// PROBLEM 4
const getBookInfo= async function (req, res) {
    let books = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({data: books})
}


// PROBLEM 5

// 5. Create at least 4 publishers (Penguin, Bloomsbury, Saraswati House, HarperCollins). Create at least 6 authors with ratings 2, 3, 3.5, 4, 4.5 and 5. Create around 10 books with these publishers and authors.
// Create a new PUT api /books and perform the following two operations
//  a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.
//  b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60)

let createPutApi = async function(req,res){

    let data = req.body
    let createBook = await bookModel.create(data);
    res.send({msg : createBook})
}

// let getPutApi = async function(req,res){
//     //let getData = await bookModel.find().populate('author_id').populate('publisher_id')
//    // res.send({msg : getData})


//     let doUpdate = await publisherModel.find({name : {$in : ["Penguin","HarperCollins"] }}).select({_id : 1})
//     let arr = doUpdate.map( x => x._id);

//     let updateM = await bookModel.updateMany({ x : {$in : arr}}, {$set : {isHardCover : true} , new : true})
//     res.send({msg : updateM})
// }

module.exports.createBook= createBook
module.exports.getBookInfo= getBookInfo
module.exports.createPutApi = createPutApi
// module.exports.getPutApi = getPutApi


