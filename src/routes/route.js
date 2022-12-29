const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const myUserController = require("../controllers/myUserController")
const myMiddleware = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",userController.getUserData)

router.put("/users/:userId", userController.updateUser)

// my code

router.post("/createUser" , myUserController.createUser)   // for creating userDetails

router.post("/userLogin" , myUserController.userLogin) // logIN with a valid userDetails

router.get("/tokenVerification/:userId",  myMiddleware.myMiddle, myUserController.getUser)

router.put("/updatedUser/:userId" , myMiddleware.myMiddle, myUserController.updatedUser)

router.delete("/isDelet/:userId", myMiddleware.myMiddle,myUserController.isDelet)

// AUTHORIZATION

router.post("/cretePost/:userId/posts", myMiddleware.myMiddle,myMiddleware.myMiddle2,myUserController.postUpdate)

module.exports = router;