const mongoose = require('mongoose')
const LawyerInfoSchema = new mongoose.Schema ({
    lawyerImageUrl: {type:String,required:true},
    lawyerNameSurname: {type:String,required:true},
    lawyerGender: {type:String,required:true},
    lawyerAge: {type:String,required:true},
    lawyerProfession: {type:Array,required:true},
    lawyerLocation: {type:String,required:true},
    lawyerEstiOnliHours: {type:String,required:true},
    lawyerDescription: {type:String,required:true},
    lawyerLocCoordinate: {type:String,required:true}
})

module.exports = mongoose.model("LawyerInfo",LawyerInfoSchema)