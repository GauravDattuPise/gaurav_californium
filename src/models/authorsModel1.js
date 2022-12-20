const mongoose = require('mongoose')

// author_id:1,
//         author_name:"Chetan Bhagat",
//         age:25,
//         address:"New delhi"
//     } ,


const authorsSchema = mongoose.Schema({
    author_id : {type : Number, require : true},
    author_name : String,
    age : Number,
    address : String
})

module.exports = mongoose.model("Author", authorsSchema)