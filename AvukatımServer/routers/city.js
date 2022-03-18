const express = require('express')
const City = require("../models/City")
const router = express.Router();



router.get("/cities",(req,res)=> {
    City.find()
    .then(cities => {
        res.json({
            city:cities,
            success:1
        });
    })
    .catch(err =>{
        res.json(err)
    })
})




module.exports = router