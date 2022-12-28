const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken");
const {isValidObjectId} = require("mongoose");

const createUser = async function(req,res){
    let data = req.body;
    let savedData = await userModel.create(data)
    res.send({status: true, msg : savedData})
}

const userLogin = async function(req,res){
    let usrMail = req.body.emailId;
    let usrPW = req.body.password;

    let userCheck = await userModel.findOne({emailId : usrMail, password : usrPW})
    if(!userCheck) return res.send({status : false, msg : "Email or Password is not valid"})

    let createToken = jwt.sign({
        userId : userCheck._id.toString(),
        name : "functionUp",
        Batch : "californium",
    }, "I-am-trainee-at-FunctionUp",{expiresIn:"150m"})
  res.setHeader("x-auth-token" ,createToken);
  res.send({status :true, data : createToken});
}

const getUser = async function(req,res){
try {
    let  data = req.headers["x-auth-token"]
    //if(!data){return res.send({status : false, msg : "Header is mandatory field"})}

    let verifyToken = jwt.verify(data,"I-am-trainee-at-FunctionUp");
    //console.log(verifyToken)               // for verifying token is valid or not
    if(!verifyToken) {return res.send({status : false , msg : "token is not Valid"})}

    let userId = req.params.userId
    //if(!isValidObjectId (userId)) return res.send({msg : "not a valid id"})
    let userDetails = await userModel.findById(userId)
    if(!userDetails) return res.send({status : false, msg : "userid is not exists"})
    res.send({status : true , data : userDetails})

 }
 catch(err){
    res.status(500).send({msg : err.message})
 }

}

const updatedUser = async function(req,res){
    let para = req.params.userId 
    let data = req.body
    let result = await userModel.findByIdAndUpdate(para ,{$set : data}, {new : true})
   // console.log(result)
    res.send({msg : result})
}

// Write a *DELETE api /users/:userId* that takes the userId in the path params and 
//marks the isDeleted attribute for a user as true.
const isDelet = async function(req,res){

    let para = req.params.userId 

    let result = await userModel.findByIdAndUpdate(para,{isDeleted : true}, {new : true})
   // console.log(result)
    res.send(result)
  
}

module.exports.createUser=createUser;
module.exports.userLogin=userLogin;
module.exports.getUser=getUser;
module.exports.updatedUser=updatedUser;
module.exports.isDelet = isDelet