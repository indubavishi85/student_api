var mongoose = require('mongoose');

var firstschema = new mongoose.Schema({
    add_std:{
        type:Number
    }
});

module.exports = mongoose.model("add_std",firstschema);