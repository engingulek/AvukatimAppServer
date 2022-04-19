const express = require('express')
const Profession = require("../models/Profession")
const router = express.Router();

router.get("/professions",(req,res)=> {
    Profession.find()
    .then(professions => {
        res.json({
            professions:professions,
            success:1
        });
    })
    .catch(err =>{
        res.json(err)
    })
})

module.exports = router