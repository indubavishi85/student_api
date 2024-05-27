var count_result = require('../model/add_result_model');

exports.d_count = async (req, res) => {

    var pass_data = await count_result.find({"result":"Pass"}).count();
    var atkt_data = await count_result.find({"result":"ATKT"}).count();
    var fail_data = await count_result.find({"result":"Fail"}).count();

    res.status(200).json({
        status: "Counting Result",
        pass_data,
        atkt_data,
        fail_data
    })
}
