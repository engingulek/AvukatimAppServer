const mongoose = require('mongoose')
const MeetingSchema = new mongoose.Schema({
    userId: {type:String,required:true},
    advertId: {type:String,required:true},
    date:{type:String,required:true},
    time:{type:String,required:true},
    lawyerAuthUserId:{type:String,required:true},
    lawyerNameSurname:{type:String,required:true},
    lawyerImageUrl:{type:String,required:true},
    clientNameSurname:{type:String,required:true},
    clientImageUrl:{type:String,required:true},
})

module.exports = mongoose.model("Meeting",MeetingSchema)