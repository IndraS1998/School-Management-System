let express = require('express')
let {check} = require('express-validator')
let router  = express.Router()

let controllers = require('../controllers/lecturer_controller')

router.post('/create',[check('Name').notEmpty().isString(),
                        check('degree').notEmpty().isString(),
                        check('appointed_courses').notEmpty().isString(),
                        check('email').notEmpty().isEmail(),
                        check('phone').notEmpty().isNumeric(),
                        check('address').isString().notEmpty(),
                        check('sex').notEmpty().isString(),
                        check('dob').notEmpty().isDate(),
                        check('password').notEmpty().isString],
                    controllers.create_lecturer)

router.post('/login',[check('username').notEmpty(),
                        check('password').notEmpty()],
                    controllers.signIn_lecturer)

router.get('/students',controllers.getEnrolledStudents)
router.get('/courses',controllers.getAssignedCourses)
router.post('/setMarks',controllers.setMark)
router.patch('/edit_password',
                    [check('password').notEmpty().isString(),
                        check('new_password').notEmpty().isString()],
                    controllers.onEditPassword)

module.exports = router