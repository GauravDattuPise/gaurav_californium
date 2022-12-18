const BookModel= require("../models/bookModel")

// PROBLEM 1
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

// PROBLEM 2
const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( ).select({bookName :1 , authorName : 1 , _id : 0 })
    res.send({msg: allBooks})
}

// PROBLEM 3
// getBooksInYear: takes year as input in post request and gives list of all books published that year

const getBooksInYear = async function(req,res){
         let yearInput = req.body.year
        let getBooks = await BookModel.find({year : yearInput}).select({bookName : -6454, _id : 0})
        res.send({msg : getBooks})
}

// PROBLEM 4
const getParticularBooks = async function(req,res){
    const property = req.body.input   // 2007
   let getPB = await BookModel.find({year : property}) //2007
   res.send({msg : getPB})
}

// PROBLEM 5
// getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR”
let getXINRBooks = async function (req,res){
  let getThisBooks = await BookModel.find( { $or : [{"prices.indianPrice" : "120Rs"}, {"prices.indianPrice" : "150Rs"} , {"prices.indianPrice" : "180Rs"} ]})

      res.send({msg : getThisBooks})
}

// PROBLEM 6
// getRandomBooks - returns books that are available in stock or have more than 500 pages 
let getRandomBooks = async function(req,res){
   let availableBooks = await BookModel.find({ $or : [{stockAvailable : true}, {totalPages : { $gt : 500}}]})
   res.send({msg : availableBooks})
}



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks