const mongoose = require('mongoose')
const FavoriteLawyerInfo = new mongoose.Schema({

    favauthUserId:{type:String,required:true},
    favlawyerImageUrl: {type:String,required:true},
    favlawyerNameSurname: {type:String,required:true},
    favlawyerGender: {type:String,required:true},
    favlawyerAge: {type:String,required:true},
    favlawyerProfession: {type:Array,required:true},
    favlawyerLocationCity: {type:String,required:true},
    favlawyerLocationCounty: {type:String,required:true},
    favlawyerEstiOnliHours: {type:String,required:true},
    favlawyerDescription: {type:String,required:true},
    favlawyerUniversty : {type:String,required:true}

})

module.exports = mongoose.model("FavLawyerInfo",FavoriteLawyerInfo)