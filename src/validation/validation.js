const nameValidation = function (value){
    let nameReg = /^[a-zA-Z]{2,30}$/
    return nameReg.test(value)
}

const emailValidation = function (value){
    let emailReg =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,3}))$/
   return  emailReg.test(value)
}

const pwValidation = function(value){
    let pwReg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
   return  pwReg.test(value)
}

module.exports = {nameValidation, emailValidation, pwValidation}