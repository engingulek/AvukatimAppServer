const mongoose = require('mongoose')
const FavoriteLawyerInfo = new mongoose.Schema({

    authUserId:{type:String,required:true},
    lawyerImageUrl: {type:String,required:true},
    lawyerNameSurname: {type:String,required:true},
    lawyerGender: {type:String,required:true},
    lawyerAge: {type:String,required:true},
    lawyerProfession: {type:Array,required:true},
    lawyerLocationCity: {type:String,required:true},
    lawyerLocationCounty: {type:String,required:true},
    lawyerEstiOnliHours: {type:String,required:true},
    lawyerDescription: {type:String,required:true},
    lawyerUniversty : {type:String,required:true}

})

module.exports = mongoose.model("FavLawyerInfo",FavoriteLawyerInfo)