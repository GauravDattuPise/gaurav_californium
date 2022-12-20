// List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )

const authorsModel1 = require("../models/authorsModel1")

const BookModel1 = require("../models/BookModel1")

let findBooks = async function(req,res){

    //  get the id of chetan bhagat from its name
    let id = await authorsModel1.findOne({author_name : "Chetan Bhagat"})
    let newId = id.author_id

    //  see the id of chetan bhagat's book which matches to BookModel1's id
    let bookList = await BookModel1.find({author_id : newId})
    res.send({msg : bookList})
}

//  PROBLEM 3
// find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price 
//in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find 
  //  query with author_id from previous query)


let findAuthor = async function(req,res){
    let bookName = await BookModel1.findOneAndUpdate(
        {name : "Two states"},
        {$set : {price : 100}},
        {new : true}
        )
      //  res.send({msg : bookName})
       let authId = bookName.author_id
        let find_auth = await authorsModel1.findOne({ author_id : authId})

        let newObj = {
          Author : find_auth.author_name ,
          updatePrice : bookName.price
        }
        res.send({msg : newObj})
}

// PROBLEM 4 
//Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 
//bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop and get all the 
//authorName corresponding to the authorId’s ( by querying authorModel)

let booksBetween = async function(req,res){
    let authorId = await BookModel1.find({price : {$gte : 50, $lte : 100}}).select({name : 1,author_id : 1, _id : 0})
    res.send({msg : authorId})

    // let authorNames = await authorsModel1.find({authorId : authorsModel1.author_id} )
    // let aa = authorNames.author_name
    // res.send({msg : aa})
}

module.exports.booksBetween = booksBetween

module.exports.findBooks = findBooks
module.exports.findAuthor = findAuthor