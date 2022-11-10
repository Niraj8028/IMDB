const User=require('../Models/User')

exports.signup=(req,res)=>{
    let user= new User(req.body);
    let result= user.save();
    
    res.send(result)
}