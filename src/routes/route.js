const express = require('express');
const lodash = require('lodash')
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const myIntro = require('../logger/logger')
const dayMonthBatch = require('../util/helper')
const LowToUp = require('../validator/formatter')

router.get('/test-me', function (req, res) {
    // console.log("email from introduction module", intro.myEmail)
    // intro.myFunction('Sabiha')
    // console.log("email from employee module", employee.myEmail)
    // const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    // let result = _.first(days, 4)
    // console.log(`Result from underscore function is ${result}`)
    // myIntro.myFunction('Gaurav Pise')

    // res.send('any dummy text')

     dayMonthBatch.currentDate;
     dayMonthBatch.currentMonth;
     dayMonthBatch.currentGetBatchInfo;

    LowToUp.trim;
    LowToUp.changetoLowerCase;
    LowToUp.changeToUpperCase
    

    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']

    function chunk(arr,size){

    const chunked = [];

    for(let ele of arr){

        let last = chunked[chunked.length - 1]

        if(!last || last.length === size){
             chunked.push([ele])
        }
        else{
            last.push(ele)
        }
    }
    return chunked
}
       console.log(chunk(months,3))

       //   tail()
       const tailArr = [1,3,5,7,9,11,13,15,17,19];
          const taill = lodash.tail(tailArr)
          console.log(taill)

        // fromPair()     converting array into object
          const a = [["horror","The Shining"],["drama" ,"Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
          let convertArrToObj = lodash.fromPairs(a);
          console.log(convertArrToObj)

          const arr1 = [1,2,3,4,5];
          const arr2 = [2,6,7,8,4];
          const arr3 = [3,4,5,5,6,7,7,8];
          const arr4 = [86,79,78,42];
          const arr5 = [43,66,72,50,79];

          let unionn = lodash.union(arr1,arr2,arr3,arr4,arr5)
          console.log(unionn)

        res.send('any dummy type text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;