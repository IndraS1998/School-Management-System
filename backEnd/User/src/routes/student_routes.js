let express = require('express')
let {check} = require('express-validator')
let router  = express.Router()

const controllers = require('../controllers/student_controller')

router.post('/create',[
    check('name').isString().notEmpty(),
    check('dob').notEmpty().isDate(),
    check('phone_number').notEmpty().isNumeric(),
    check('email').notEmpty().isString(),
    check('password').notEmpty().isString(),
    check('address').notEmpty().isString(),
    check('sex').notEmpty().isString(),    
],controllers.sign_up_student)

router.post('/login',[
    check('name').isString().notEmpty(),
    check('password').notEmpty().isString()
],controllers.sign_in_student)

router.patch('/register',[
    check('student_id').notEmpty().isString(),
    check('amount').notEmpty().isNumeric()
],controllers.register)

router.post('/get_transcript',[
    check('student_id').notEmpty().isString(),
    check('semester').notEmpty().isNumeric()
],controllers.onGetTranscript)

router.post('/edit_password',[
    check('name').isString().notEmpty(),
    check('newPs').notEmpty().isString(),
    check('oldPs').notEmpty().isString()
],controllers.onEditPassword)

module.exports = router