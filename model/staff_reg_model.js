var mongoose = require('mongoose');

var firstschema = new mongoose.Schema({
    Fname:{
        type:String
    },
    Lname:{
        type:String
    },
    Mobile:{
        type:Number
    },
    User_name:{
        type:String
    },
    Email:{
        type:String
    },
    Gender:{
        type:String
    },
    Language:{
        type:String
    }
});

module.exports = mongoose.model("staff",firstschema);