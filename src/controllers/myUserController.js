const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken");
//const {isValidObjectId} = require("mongoose");

const createUser = async function (req, res) {
    try {
        let data = req.body;
        let savedData = await userModel.create(data)
       // if(!savedData)  res.status(404).send({msg : "user not found"})
        res.status(200).send({ status: true, msg: savedData })
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const userLogin = async function (req, res) {
    try {
        let usrMail = req.body.emailId;
        let usrPW = req.body.password;

        let userCheck = await userModel.findOne({ emailId: usrMail, password: usrPW })
        if (!userCheck) return res.status(400).send({ status: false, msg: "Email or Password is not valid" })

        let createToken = jwt.sign({
            userId: userCheck._id.toString(),
            name: "functionUp",
            Batch: "californium",
        }, "I-am-trainee-at-FunctionUp")
        res.setHeader("x-auth-token", createToken);

        res.status(200).send({ status: true, data: createToken });

    } catch (err) {
        res.status(500).send(err.message)
    }
}

const getUser = async function (req, res) {
    try {
        let data = req.headers["x-auth-token"]

        let verifyToken = jwt.verify(data, "I-am-trainee-at-FunctionUp");
        // for verifying token is valid or not
        if (!verifyToken) { return res.status(400).send({ status: false, msg: "token is not Valid" }) }

        let userId = req.params.userId
        let userDetails = await userModel.findById(userId)
        // for verifying use is valid or not
        if (!userDetails) return res.send({ status: false, msg: "userid is not exists" })
        res.status(200).send({ status: true, data: userDetails })

    }
    catch (err) {
        res.send({ msg: err.message })
    }

}

const updatedUser = async function (req, res) {
    try {
        let para = req.params.userId
        let data = req.body
        let result = await userModel.findByIdAndUpdate(para, { $set: data }, { new: true })
        // console.log(result)
        if(!result) res.status(400).send({msg : "id is invalid"})
        res.status(200).send({ msg: result })
    } catch (err) {
        res.send(err.message)
    }
}

// Write a *DELETE api /users/:userId* that takes the userId in the path params and 
//marks the isDeleted attribute for a user as true.
const isDelet = async function (req, res) {
    try {
        let para = req.params.userId

        let result = await userModel.findByIdAndUpdate(para, { isDeleted: true }, { new: true })
        if(!result) res.status(400).send({msg : "id is invalid"})
        res.status(200).send(result)
    } catch (err) {
        res.send(err.message)
    }

}

module.exports.postUpdate = async function (req, res) {
    try {
        let msg = req.body.msg
        let user = await userModel.findById(req.params.userId)
        if (!user) return res.status(400).send({ msg: "user not found" })

        let updatePost = user.posts
        updatePost.push(msg)

        let updatedUser = await userModel.findByIdAndUpdate({ _id: user._id }, { posts: updatePost }, { new: true })
        if(!updatedUser) res.status(400).send({msg : "id is invalid"})
        return res.send({ status: true, msg: updatedUser })
    } catch (err) {
        res.send(err.message)
    }
}



module.exports.createUser = createUser;
module.exports.userLogin = userLogin;
module.exports.getUser = getUser;
module.exports.updatedUser = updatedUser;
module.exports.isDelet = isDelet