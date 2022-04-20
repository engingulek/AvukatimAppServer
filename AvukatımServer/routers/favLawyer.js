const express = require('express')
const FavLawyerInfo = require("../models/FavoriteLawyer")
const router = express.Router();



// favorilere eklenen avukat bilgilerinin alınması 

router.get("/favLawyerInfo",(req,res)=> {
    FavLawyerInfo.find()
    .then(favLawyerInfo => {
        res.json({
            favLawyerInfos : favLawyerInfo,
            success:1
        })
    })
    .catch(err=>{
        res.json(err)
    })
})


// favorilere avukat eklemek için yapılmaktadır.
router.post("/favlawyerRegister",(req,res)=> {
    console.log(req.body)
    const favlawyerInfo = new FavLawyerInfo({
        authUserId: req.body.authUserId,
        lawyerImageUrl : req.body.lawyerImageUrl,
        lawyerNameSurname: req.body.lawyerNameSurname,
        lawyerGender: req.body.lawyerGender,
        lawyerAge: req.body.lawyerAge,
        lawyerProfession: req.body.lawyerProfession,
        lawyerLocationCity: req.body.lawyerLocationCity,
        lawyerLocationCounty:req.body.lawyerLocationCounty,
        lawyerEstiOnliHours: req.body.lawyerEstiOnliHours,
        lawyerDescription: req.body.lawyerDescription,
        lawyerUniversty : req.body.lawyerUniversty

    })
favlawyerInfo.save()
res.json({
    success :1,
    message:"success"
})
})

// favorilerden ilan silme
router.post("/deletefavAdvert",(req,res)=> {
    console.log(req.body.authUserId)
    FavLawyerInfo.findByIdAndDelete(req.body.authUserId)
    .then((favLawyerInfos)=> {
        res.json({
            favLawyerInfos:favLawyerInfos,
            success:1
        });
    })
    .catch(err =>{
        res.json(err)
    })   
})
module.exports = router