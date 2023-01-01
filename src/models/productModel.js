const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name : String,
    category : String,
    price : {type : Number, required : true}
})

module.exports = mongoose.model("productMidd3", productSchema)