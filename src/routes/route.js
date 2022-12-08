const express = require('express');
const router = express.Router();
const intro = require('../Introdunction')

router.get('/test-me', function (req, res) {
    intro.myFun("Gaurav Pise");
    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;