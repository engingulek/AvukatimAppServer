const mongoose = require('mongoose')
const LawyerCommentSchema = new mongoose.Schema({
    customerId: {type:String,required:true},
    lawyerId: {type:String,required:true},
    comments: {type:Array,required:true},
    commentDate : {type:String,required:true},

})

module.exports = mongoose.model("LawyerComment",LawyerCommentSchema)