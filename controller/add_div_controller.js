var add_div = require('../model/add_div_model');


exports.insert = async (req, res) => {
    var data = await add_div.create(req.body);

    res.status(200).json({
        status: "data insert",
        data
    })
}
exports.get_data = async (req, res) => {
    var data = await add_div.find();

    res.status(200).json({
        status: "data select",
        data
    })
}