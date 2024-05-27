var mongoose = require('mongoose');

var firstschema = new mongoose.Schema({
    add_div:{
        type:String
    }
});

module.exports = mongoose.model("add_div",firstschema);