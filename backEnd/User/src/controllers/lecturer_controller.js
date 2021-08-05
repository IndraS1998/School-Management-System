/*
    *TODO
    **signUp
    **login
    **get school activities
    **view personal courses
    **get all enrolled students for their courses
    **edit personal info
    **upload results
*/
let lecturers = []
let enrolled_students = [
    {
        name : "Claire Lissom",
        age : 19,
        student_matricule : "kp162021",
        dob : "29/01/1998",
        exam_mark : 0,
        ca_mark : 0,
        resit : null
    }
]
let personal_courses = []

let {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken');
let HttpError = require('../models/httpError')

let create_lecturer = async (req,res,next) =>{
    let er = validationResult(req)
    if(!er.isEmpty()){
        return next(new HttpError('invalid data input',401))
    }

    let {Name,degree,appointed_courses,email,phone,address,sex,dob,password} = req.body

    /*  verify if user exists */
    /* create new user */
    let newLecturer = {Name,degree,appointed_courses,email,phone,address,sex,dob,password}
    /* save the user */
    lecturers.push(newLecturer)
    await res.json({message : "sucessfully created new user"}).status(200)
}

let signIn_lecturer = async (req,res,next) =>{
    let err = validationResult(req)
    if(!err.isEmpty()){
        return next(new HttpError('invalid input data',401))
    }

    let {username,password} = req.body
    let found_lecturer = lecturers.filter(l => l.Name === username)
    if(!found_lecturer){
        return next(new HttpError('such a user doesn\'t exist',401))
    }
    if(found_lecturer.password !== password){
        return next(new HttpError('wrong credentials',401))
    }
    /*let token;
    try{
        token = jwt.sign({id:found_lecturer.id,email:found_lecturer.email},
            'secretKeyDontShare',
            {expiresIn:'1h'});
    }catch (e) {
        return next(new HttpError('something went wrong please try again later',500))
    }*/
    res.json({found_lecturer/*,token*/}).status(200)
}

async function getEnrolledStudents(req,res,next){
    // verify token
    await res.json({students : enrolled_students}).status(200)
}

async function getAssignedCourses(req,res,next){
    // verify the token
    await res.json({courses : personal_courses}).status(200)
}

async function setMark(req,res,next){
    let {main_array} = req.body
    main_array.forEach(student => {
        let found_student = enrolled_students.filter(elt => elt.student_matricule === student.student_matricule)
        if(!found_student){
            return next(new HttpError('student not found',401))
        }
        // save the mark
        switch(student.markType){
            case ex : 
                found_student.exam_mark = student.exam_mark
                break;
            case ca : 
                found_student.ca_mark = student.ca_mark
                break;
            case resit : 
                found_student.resit = student.resit_mark
                break;
            case all :
                found_student.exam_mark = student.exam_mark
                found_student.ca_mark = student.ca_mark
                break;
        }
    })
    await res.json({students : enrolled_students.map(s => s.toObject({getters : true}))}).status(201)
}

async function onEditPassword(req,res,next){
    let err = validationResult(req)
    if(!err.isEmpty()){
        return next(new HttpError('unvalid data',400))
    }
    let {password,new_password} = req.body
    let found_lecturer = lecturers.filter(l => l.username === password)
    found_lecturer.password = new_password
    await res.json({message : "success"}).status(200)
}

exports.create_lecturer = create_lecturer
exports.signIn_lecturer = signIn_lecturer
exports.getAssignedCourses = getAssignedCourses
exports.getEnrolledStudents = getEnrolledStudents
exports.setMark = setMark
exports.onEditPassword = onEditPassword