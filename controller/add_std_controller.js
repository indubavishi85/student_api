var add_std = require('../model/add_std_model');


exports.insert = async (req, res) => {
    var data = await add_std.create(req.body);

    res.status(200).json({
        status: "data insert",
        data
    })
}
exports.get_data = async (req, res) => {
    var data = await add_std.find();

    res.status(200).json({
        status: "data select",
        data
    })
}