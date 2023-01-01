const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');
const userModel = require('../models/userModel');

const placeOrder = async (req,res) => {

    let data = req.body;

    // is user exists
    let checkUser = await userModel.findById(data.userId)
    if(!checkUser) return res.send({msg : "user does't exists"})

    // is product exists
    let checkProduct = await productModel.findById(data.productId)
    if(!checkProduct) return res.send({msg : "product doesn't exists"})

    //  if user is free app user then order without deducting balance
    if(data.isFreeAppUser == true){
        const savedData = await orderModel.create(data)
    res.send({msg : savedData})
    }

    // check user balance as well as product price
    if(data.isFreeAppUser == false){
           if(checkProduct.price > checkUser.balance){
            return res.send({msg : "you don't have enough balance"})
           }
           else{
            data.amount = checkProduct.price;
            let updateData = await userModel.findByIdAndUpdate(checkUser._id, {balance : (checkUser.balance - checkProduct.price)},{new : true})
            
            const savedData = await orderModel.create(data)
            res.send({msg : savedData})
           }
    }

}

module.exports.placeOrder = placeOrder