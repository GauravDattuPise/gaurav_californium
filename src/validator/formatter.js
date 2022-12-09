function trim(){

    let str = '  functionUp  ';
    console.log(str.trim())
}

function changetoLowerCase(){
    let str = 'FuncTionUp';
    console.log(str.toLowerCase())
}

function changeToUpperCase() {
    let str = 'fuNctIonUp';
    console.log(str.toUpperCase())
}

module.exports.trim = trim()
module.exports.changetoLowerCase = changetoLowerCase()
module.exports.changeToUpperCase = changeToUpperCase()