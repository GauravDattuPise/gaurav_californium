const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({

    userId : {type : objectId, ref : "userMidd3"},
    productId : {type : objectId, ref : "productMidd3"},
    amount : Number,
    isFreeAppUser : false,
    date : String
})

module.exports = mongoose.model("orderMidd3", orderSchema)