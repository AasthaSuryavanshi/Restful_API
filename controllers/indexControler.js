const User = require('../models/userModel');


exports.home = (req,res,next) => {
    res.status(202).json({success:true, message:"this is mesg"});
}

exports.register = async (req, res, next) => {

    try {
    const user = new User(req.body);
    await user.save()
    res.status(201).json({ success: true, user})
    } catch (error) {
        res.status(500).json({success: false, error: error.message})
    }
    
    const user = new User(req.body)
    await user.save()
}

exports.readall = async (req, res, next) => {

    try {
    
        const users = await User.find();             //in this u cant see password coz select is false
        // const users = await User.find().select('+password');         //to get password for password reset n all
    res.status(200).json({ success: true, users})
    } catch (error) {
        res.status(500).json({success: false, error: error.message})
    }
}