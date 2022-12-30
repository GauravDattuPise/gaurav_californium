const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")

const createOrder= async function (req, res) {
    // check header exists or not
    let appHeader = req.headers["isFreeAppUser"]
    if(!appHeader) appHeader = req.headers["isfreeappuser"]

    if(!appHeader) return res.send({status: false, message:"The header is not present."})

   // console.log("request header is", appHeader)
    
    let data= req.body

    if(appHeader == 'true') {
        data.isFreeAppUser = true
    } else {
        data.isFreeAppUser = false
    }

    //User exists or not
    let user = await userModel.findById(data.userId)
    if(!user) return res.send({status : false, message: "User not found"})

    // product exists or not
    let product = await productModel.findById(data.productId)
    if(!product) return res.send({status: false, message: "Product not found"})

    //  If user is freeappuser then we will not deduct his balance
    if(appHeader == 'true') {
        data.amount = 0
        let savedData= await orderModel.create(data)
        return res.send({status: true, data: savedData})
    }

    // If user is paid user then check his balance .
    if(appHeader != 'true') {
        if(user.balance < product.price) {
            return res.send({staus: false, message: "user doesn't jave enough balance"})
        } else {
            // if user balance is more than product price then we have to order product
            // and deduct balance = ( of user - product price)
            data.amount = product.price
            let savedData= await orderModel.create(data)
            await userModel.findOneAndUpdate({_id:data.userId}, {balance:user.balance - product.price})
            return res.send({status: true, data: savedData})
        }
    }


}

module.exports.createOrder = createOrder