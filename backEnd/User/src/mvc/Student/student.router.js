const {check} = require('express-validator')
const router  = require('express').Router()

const controllers = require('./student.controller')

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
module.exports = router