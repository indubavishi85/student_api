var add_stu = require('../model/add_student_model');


exports.insert = async (req, res) => {
    var data = await add_stu.create(req.body);

    res.status(200).json({
        status: "data insert",
        data
    })
}
exports.get_data = async (req, res) => {
    var data = await add_stu.find();

    res.status(200).json({
        status: "data select",
        data
    })
}