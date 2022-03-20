const mongoose = require('mongoose')
const LawyerInfoSchema = new mongoose.Schema ({
    lawyerImageUrl: {type:String},
    lawyerName: {type:String},
    lawyerSurname: {type:String},
    lawyerGender: {type:String},
    lawyerAge: {type:String},
    lawyerProfession: {type:Array},
    lawyerLocation: {type:String},
    lawyerEstiOnliHours: {type:String},
    lawyerDescription: {type:String},
    lawyerLocCoordinate: {type:String}
})

module.exports = mongoose.model("LawyerInfo",LawyerInfoSchema)