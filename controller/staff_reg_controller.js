var staff_reg = require('../model/staff_reg_model');

exports.insert = async (req, res) => {
    
    var data = await staff_reg.create(req.body);

    res.status(200).json({
        status: "data insert",
        data
    })
}

exports.get_data = async (req, res) => {
    var data = await staff_reg.find();

    res.status(200).json({
        status: "data select",
        data
    })
}

exports.delete_data = async(req,res) => {

    var id = req.params.id;

    var data = await staff_reg.findByIdAndDelete(id);

    res.status(200).json({
        status:"data deleted"
    })
}

exports.update_data = async(req,res) => {

    var id = req.params.id;

    var data = await staff_reg.findByIdAndUpdate(id,req.body);
    
    var staff_data = data;

    if(staff_data !== null)
    {
        res.status(200).json({
            
            status:"Allow Access" 
        })
    }
    else
    {
        res.status(200).json({
            status:"No Allow Access" 
        })   
    }
}