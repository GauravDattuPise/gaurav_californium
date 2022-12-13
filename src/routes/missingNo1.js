// const express = require('express');
const router = express.Router();

router.get('/Sol1', function(req,res){
    let arr = [1,2,3,5,6,7];
    let sum1 = 0;
    for(let i=0;i<arr.length;i++){
        sum1 += arr[i];
    }
    res.send(sum1)
})
module.exports = router;