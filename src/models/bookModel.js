const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
   book_name: String,
    author_id: {
        type: ObjectId,
        ref: "NewAuthor"
    }, 
    price: Number,
    rating: Number,
    publisher_id :{
        type : ObjectId,
        ref : "NewPublisher"
    },
    // isHardCover :{
    //     type : Boolean,
    //     default : false
    // }


}, { timestamps: true });


module.exports = mongoose.model('NewBook', bookSchema)
