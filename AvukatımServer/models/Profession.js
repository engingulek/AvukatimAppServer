const mongoose = require('mongoose')
const ProffesionSchema = new mongoose.Schema ({
    professionName: {type:String,required:true},
    professionDescription: {type:String,required:true}
    
})

module.exports = mongoose.model("Proffesion",ProffesionSchema)