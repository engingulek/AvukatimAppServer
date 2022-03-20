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
        lawyerImageUrl : req.body.lawyerImageUrl,
        lawyerName: req.body.lawyerName,
    lawyerSurname: req.body.lawyerSurname,
    lawyerGender: req.body.lawyerGender,
    lawyerAge: req.body.lawyerAge,
    lawyerProfession: req.body.lawyerProfession,
    lawyerLocation: req.body.lawyerLocation,
    lawyerEstiOnliHours: req.body.lawyerEstiOnliHours,
    lawyerDescription: req.body.lawyerDescription,
    lawyerLocCoordinate: req.body.lawyerlawyerLocCoordinate,

    })


lawyerInfo.save()
res.json({
    success :0,
    message:"Success"

})
})

module.exports = router