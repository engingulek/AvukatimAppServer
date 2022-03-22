const express = require('express')
const LawyerComment = require("../models/LawyerComments")
const router = express.Router();


router.get("/lawyerComment",(req,res)=> {
    LawyerComment.find()
    .then(lawyerComment => {
        res.json({
            lawyerComments:lawyerComment,
            success:1
        });
    })
    .catch(err =>{
        res.json(err)
    })
})


router.post("/lawyerCreateComments",(req,res)=> {
    console.log(req.body)
    const lawyerComment = new LawyerComment({

    customerId:req.body.customerId,
    lawyerId: req.body.lawyerId,
    comments: req.body.comments,
    commentDate : req.body.commentDate,

    })


lawyerComment.save()
res.json(lawyerComment)
})

module.exports = router