const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    productId: {
        type: ObjectId,
        ref: "gauravsProduct"
    }, 
    userId: {
        type: ObjectId,
        ref: "gauravsUsers"
    },
    amount: Number,
    isFreeAppUser: Boolean,
    date: String
}, { timestamps: true });


module.exports = mongoose.model('gauravsOrder', orderSchema)
