const {check} = require('express-validator')
const router  = require('express').Router()

const controllers = require('./student.controller')
const checkAuth = require('../../middleware/authenticate.middleware')

router.post('/create',[
    check('first_name').isString().notEmpty(),
    check('last_name').isString().notEmpty(),
    check('date_of_birth').notEmpty().isString(),
    check('phone_number').notEmpty().isNumeric(),
    check('email').notEmpty().isEmail(),
    check('password').notEmpty().isString(),
    check('sex').notEmpty().isString(), 
    check('guardian_first_name').isString().notEmpty(),
    check('guardian_last_name').isString().notEmpty(),
    check('guardian_id_number').isString().notEmpty(),
    check('guardian_contact').isNumeric().notEmpty(),
    check('id_number').isString().notEmpty(),
    check('place_of_birth').isString().notEmpty(),
    check('address').isString().notEmpty(),
],controllers.signup)

router.post('/login',[
    check('email').notEmpty().isEmail(),
    check('password').notEmpty().isString(),
],controllers.login)

router.patch('/update',[
    check('department').isString().notEmpty(),
    check('speciality').isString().notEmpty(),
    check('specialityCode').isString().notEmpty(),
    check('file_path').isString().notEmpty(),
    check('year').isNumeric().notEmpty(),
    check('program').isString().notEmpty(),
    checkAuth.student
],controllers.register)

router.patch('/edit_password',[
    check('matricule').isString().notEmpty(),
    check('oldPassword').isString().notEmpty(),
    check('newPassword').isString().notEmpty(),
    checkAuth.student
],controllers.onEditPassword)

router.get('/personalCourses',[
    check('speciality').isString().notEmpty(),
    checkAuth.student],controllers.getCourses)

router.get('/timeTable',[
    check('program').isString().notEmpty(),
    checkAuth.student],controllers.getTimeTable)

router.get('/departments',checkAuth.student,controllers.departments)
router.get('/specialities',checkAuth.student,controllers.specialities)
router.get('/programs',checkAuth.student,controllers.programs)
module.exports = router