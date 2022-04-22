const express = require('express')
const Meeting = require("../models/Meeting")
const router = express.Router();

// meeting list gelmesi
router.get("/meetings",(req,res)=>{
    Meeting.find()
    .then(meetings=>{
        res.json({
            meetings:meetings,
            success:1
        });
    })
    .catch(err=>{
        res.json(err)
    })
})

router.post("/addMeeting",(req,res)=>{
    const meetList = new Meeting ({
        userId: req.body.userId,
    advertId: req.body.advertId,
    date:req.body.date,
    time:req.body.time,

    })

    meetList.save()
    res.json({
        success :1,
    message:"success"

    })
})




module.exports = router