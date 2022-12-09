
function printDate(){
     
    let date = new Date();
    let today = date.getDate()
    console.log(today)
}

function printMonth(){

    let date = new Date();
    let month = date.getMonth()
    console.log(month + 1)
}

// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - 
//   Californium, W3D4, the topic for today is Nodejs module system’

function getBatchInfo(batch_name,week,Day){
    console.log(`${batch_name} ${week}${Day} the topic for today is Nodejs module system`)
}

module.exports.currentDate = printDate()

module.exports.currentMonth = printMonth()

module.exports.currentGetBatchInfo = getBatchInfo('californium','W3','D4')