const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    
        name : String,
        author_id : Number,
        price : Number,
        ratings : Number,

})

module.exports = mongoose.model("NewBook", bookSchema)