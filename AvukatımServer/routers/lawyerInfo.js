const express = require('express')
const LawyerInfo = require("../models/LawyerInfo")
const router = express.Router();


// avukatları bilgilerinin alınmasını sağlamaktadır.
router.get("/lawyerInfo",(req,res)=> {
    LawyerInfo.find()
    .then(lawyerInfo => {
        res.json({
            lawyerInfos:lawyerInfo,
            success:1
        });
    })
    .catch(err =>{
        res.json(err)
    })
})




// avukatların kayıt olmasını sağlamaktadır. 
router.post("/lawyerRegister",(req,res)=> {
    console.log(req.body)
    const lawyerInfo = new LawyerInfo({
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
lawyerInfo.save()
res.json({
    success :1,
    message:"success"
})
})



// kullanıcıya ait bilgilerin getirilmesi
router.post("/lawyerInfoAuth",(req,res)=>{
    LawyerInfo.find()
    .then(lawyerInfo => {
        var info = lawyerInfo.filter(x => x.authUserId==req.body.authUserId)
        res.json({
            lawyerInfos:info,
            success:1
        });
    })
    .catch(err =>{
        res.json(err)
    })    
})


router.post("/deleteAdvert",(req,res)=> {
    console.log(req.body.authUserId)
    LawyerInfo.findByIdAndDelete(req.body.authUserId)
    .then((lawyerInfo)=> {
        res.json({
            lawyerInfos:lawyerInfo,
            success:1
        });
    })
    .catch(err =>{
        res.json(err)
    })   
})
module.exports = router