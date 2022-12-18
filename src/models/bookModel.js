// Create a books collection in your DB ( using bookModel with following fields)- bookName( mandatory field), price containing Indian and european price, year ( should be 2021 if no year is provided) , tags array, authorName, totalPages , stockAvailable ( true false)
// create the following API’s (write logic in bookController and routes in routes):
// createBook : to create a new entry..use this api to create 11+ entries in your collection

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type : String ,
        required : true
    },
     authorName: String, 
     tags: [String],
    
     isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year :{ 
        type : Number,
         default : 2021
        },
    sales: {type: Number, default: 10},
    totalPages : Number ,
    stockAvailable : Boolean
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) // books

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
