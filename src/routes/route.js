const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController")
const productController = require("../controllers/productController")
const orderController = require("../controllers/orderController")
const commonMiddleware = require("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createUser",commonMiddleware.midd3,userController.createUser)
router.post("/createProduct",productController.createProduct)
router.post("/placeOrder",commonMiddleware.midd3,orderController.placeOrder)

module.exports = router;