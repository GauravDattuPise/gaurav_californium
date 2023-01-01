const midd3 = function check (req,res,next){
    
   let  appHeader = req.headers['isfreeappuser']
   
   if(!appHeader){
       return res.send({msg : "header is mandatory"})
   }
  
   let data = req.body

    if(appHeader == 'true'){
       data.isFreeAppUser = true
    }else{
       data.isFreeAppUser = false
    }

    next();

}

module.exports.midd3 = midd3