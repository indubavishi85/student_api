var express = require('express');
var router = express.Router();

var stu_login = require('../controller/admin_controller');
var staff_reg=require('../controller/staff_reg_controller');
var staff_login=require('../controller/staff_login_controller');
var add_std=require('../controller/add_std_controller');
var add_div=require('../controller/add_div_controller');
var add_stu=require('../controller/add_student_controller');
var add_reslt=require('../controller/add_result_controller');
var view_reslt=require('../controller/view_result_controller');
var view_staff=require('../controller/view_staff_controller');
var view_stud=require('../controller/view_student_div_std_controller');
var manage_reslt=require('../controller/manage_result_controller');
var count_result=require('../controller/result_count_controller');
var auth = require('../middlewear/auth');

/* GET home page. */
router.get('/admin',stu_login.get_data);
router.post('/insert',stu_login.insert);
router.post('/login',stu_login.login);
router.get('/logout',stu_login.logout);

// staff_Register_Form

router.post('/staff_insert',staff_reg.insert);
router.get('/staff',staff_reg.get_data);
router.get('/staff_delete/:id',staff_reg.delete_data);
router.post('/staff_update/:id',staff_reg.update_data);

// Staff_login

router.post('/staff_login_insert',staff_login.insert);
router.get('/staff_login',staff_login.get_data);
router.get('/staff_login_delete/:id',staff_login.delete_data);
router.post('/staff_login_update/:id',staff_login.update_data);
router.post('/staff_login',staff_login.login);
router.get('/staff_logout',staff_login.logout);

// Add_Std
router.post('/add_std_insert',add_std.insert);
router.get('/add_std',add_std.get_data);

// Add_div
router.post('/add_div_insert',add_div.insert);
router.get('/add_div',add_div.get_data);

// Add Student
router.post('/add_stu_insert',add_stu.insert);
router.get('/add_stu',add_stu.get_data);

// Add_result
router.post('/add_reslt_insert',add_reslt.insert);
router.get('/',add_reslt.get_data);

// View Result
router.post('/view_reslt_insert',view_reslt.insert);
router.get('/view_reslt',view_reslt.get_data);
router.get('/view_reslt/:id',view_reslt.view_data);

// Staff_View
router.post('/view_staff_insert',view_staff.insert);
router.get('/view_staff',view_staff.get_data);

// View_Student Div Std
router.post('/view_stud_insert',view_stud.insert);
router.get('/view_stud',view_stud.get_data);

// Manage_result
router.get('/manage_reslt_delete/:id',manage_reslt.delete_data);
router.post('/manage_reslt_update/:id',manage_reslt.update_data);

// Count Result
router.get('/count',count_result.d_count);



module.exports = router;
