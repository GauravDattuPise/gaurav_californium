// crete a api to fetch all the student data into the student table 
// whre the student attendence is 50 % or gretater than 50%


const students = async function(req,res){

const getStuedent = await stdModel.find({studentAttendence : { $gte : 50}} )

return res.status(200).send({status : true, data : getStuedent})

}