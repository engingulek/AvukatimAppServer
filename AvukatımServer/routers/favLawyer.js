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
   favauthUserId: req.body.favauthUserId,
   favlawyerImageUrl : req.body.favlawyerImageUrl,
    favlawyerNameSurname: req.body.favlawyerNameSurname,
    favlawyerGender: req.body.favlawyerGender,
    favlawyerAge: req.body.favlawyerAge,
    favlawyerProfession: req.body.favlawyerProfession,
    favlawyerLocationCity: req.body.favlawyerLocationCity,
    favlawyerLocationCounty:req.body.favlawyerLocationCounty,
    favlawyerEstiOnliHours: req.body.favlawyerEstiOnliHours,
    favlawyerDescription: req.body.favlawyerDescription,
    favlawyerUniversty : req.body.favlawyerUniversty

    })
favlawyerInfo.save()
res.json({
    success :1,
    message:"success"
})
})
module.exports = router