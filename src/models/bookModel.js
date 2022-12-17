const mongoose = require("mongoose")

// bookName, authorName, category and year

const bookSchema = new mongoose.Schema({
         bookName : String,
         authorName : String,
         catagory : String,
         year : Number ,
},{timestamps : true})

module.exports = mongoose.model ('Book',bookSchema);



//Create a bookSchema with bookName, authorName, category and year . Create same 2 api's for books i.e. : 1 api to create a new book and another api to get the list of all books. 