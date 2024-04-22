const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    username:{
        type:String,
        required: [true, "Username is required"],
        unique: true,
        minLength:[6, "username at lest 6 char"],
        trim: true,
    },
    name:{
        type:String,
        required: [true, "Username is required"],
        unique: true,
        minLength:[6, "username at lest 6 char"],
        trim: true,
    },
    email:{
        type:String,
        lowercase:true,
        required: [true, "email is required"],
        unique: true,
        minLength:[6, "email atleast 6 char"],
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    gender:{
        type:String,
        enum:["male", "female","others"],
        required: [true, "gender is required"],
    },
    password:{
        type:String,
        select:false,    // server pr pass nhi dekhega
        required: [true, "password is required"],
        minLength:[6, "password at least 6 char"],
        maxLength:[15, "password atmost 15 char"],

    }
})

const User = mongoose.model('User', userModel)
module.exports = User