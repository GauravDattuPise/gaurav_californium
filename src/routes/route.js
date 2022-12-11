const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule'); 
const req = require('express/lib/request');
const { route } = require('express/lib/application');
const { response } = require('express');


router.get("/profile-details", function(req, res){
    // Write the LOGIC here
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Gaurav')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 3)
    console.log(`Result from underscore function is ${result}`)
    console.log(`The mentor of the day is ${mentorModule.mentor1}`)

    res.send('any dummy text from route handler 111111')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("any dummy text from route handler 2")
})

router.get('/students', function (req, res){
    let students = ['Gaurav', 'Chandranath', 'Pritesh']
    res.send(students)
})

// PATH Param example
router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use many ways to print an object in Javascript, JSON stringify is one of them
   
    console.log(requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    console.log("This is the request "+ JSON.stringify(requestParams)) 
    res.send('Dummy response')
})

// PATH Param example
router.get("/profile/:name", function(req, res){
     console.log(req)
    //  console.log('Printing the request to find out where name is stored', req.params)
    //  console.log('user name is', req.params.name)
   // console.log(`User requesting for profile is ${name}`)
    res.send("dummy details")
})

// Query Param example
router.get("/shoes", function(req, res){
    console.log("The filter options for shoes are -",req.query)
    //req.query.size
    //req.query.brand
    res.send("dummy shoes response")
})

// problem 1

router.get("/movies", function(req,res){

    const movies =['Lal Singh Chadda', 'KGF', 'RRR', 'Bahubali : The Begining', 'Bahubali : The Conclusion']
       res.send(movies)
}
)  

//     problem 2  and  3

router.get("/movies/:indexNumber", function(req, res){
    
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'];

   //  problem 2  

        // let arr = [] ;
        // for(let i=0; i<movies.length; i++){
        //     if(i  == req.params.indexNumber){
        //         arr.push(movies[i])
        //     }
        //  }
        //  res.send(arr)

   //  problem  3

       function problem3(movies)
       {
        if(req.params.indexNumber <= movies.length)
        {
            let arr = [] ;
           for(let i=0; i<movies.length; i++)
           {
            if(i  == req.params.indexNumber)
            {
                arr.push(movies[i])
            }
           }
           return arr;
        }
        else
        {
            return "Use valid index number"
        }

       }
           const  result = problem3(movies)
            res.send(result)
})


//     problem  4

router.get("/films", function(req,res){

    const filmi = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       res.send(filmi)
}
)  

//     problem 5

router.get("/films/:filmId", function(req,res){

    const movies = [ {'id': 1,'name': 'The Shining'}, {'id': 2,'name': 'Incendies'},
                     {'id': 3,'name': 'Rang de Basanti'}, {'id': 4,'name': 'Finding Nemo'}]


    function searchMovies(movies){

        for(let i=0; i<movies.length; i++){
            if( movies[i].id == req.params.filmId){
                return movies[i]
            }
        }
        return 'No movie exists with this id'
    }
    let b = searchMovies(movies)
    res.send(b)
})

module.exports = router;