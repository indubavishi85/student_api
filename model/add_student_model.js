var mongoose = require('mongoose');

var firstschema = new mongoose.Schema({
    stu_name:{
        type:String
    }
});

module.exports = mongoose.model("add_stu",firstschema);