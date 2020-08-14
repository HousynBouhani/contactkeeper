const mongoose = require("mongoose");
//create schema 
/*
    how data looks like
*/
const UserSchema = mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true
    },
    date : {
        type:Date,
        default:Date.now
    }

});

//Create model
module.exports = mongoose.model('User',UserSchema);