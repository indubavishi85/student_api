var mongoose = require('mongoose');

var firstschema = new mongoose.Schema({
    stu_name:{
        type:String
    },
    std:{
        type:String
    },
    div:{
        type:String
    },
    sub1:{
        type:Number
    },
    sub2:{
        type:Number
    },
    sub3:{
        type:Number
    },
    sub4:{
        type:Number
    },
    sub5:{
        type:Number
    },
    total:{
        type:Number
    },
    per:{
        type:Number
    },
    max:{
        type:Number
    },
    min:{
        type:Number
    },    
    result:{
        type:String
    }

});

module.exports = mongoose.model("add_reslt",firstschema);