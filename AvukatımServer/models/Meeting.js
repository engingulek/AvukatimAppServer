const mongoose = require('mongoose')
const MeetingSchema = new mongoose.Schema({
    userId: {type:String,required:true},
    advertId: {type:String,required:true},
    date:{type:String,required:true},
    time:{type:String,required:true},
})

module.exports = mongoose.model("Meeting",MeetingSchema)