const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
  );

  const globalMidd = function(req,res,next){
    let currentDate = new Date();

    let currentTime = currentDate.getDate()+(currentDate.getMonth()+1)+currentDate.getFullYear()+
                      currentDate.getHours()+": "+currentDate.getMinutes()+": "+currentDate.getSeconds()
    console.log(currentDate)

    let ipAdd = req.ip
    let url = req.originalUrl

    console.log(ipAdd,url)
    next()
  }
  
  app.use(globalMidd)

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
