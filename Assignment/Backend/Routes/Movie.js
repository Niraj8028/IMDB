var express = require('express');
var router = express.Router();
const Movie=require('../Models/Movie')


router.post('/add/movie',async(req,res)=>{
    let movie=new Movie(req.body)
    let result=await movie.save();
    res.send(result);
})


module.exports = router;