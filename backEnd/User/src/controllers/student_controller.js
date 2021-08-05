/*TODO
    *create account
    *sign in
    *pay registration
    *register for courses course
    *get transcript
    *edit password
    *view school time table
    *get registered courses
*/
const students = []
const transcripts = []
const departments = [
    {
        dep_name : "Engineering",
        dep_Id : "ict20kp",
        dep_hod : "ntenga bangme"
    },
    {
        dep_name : "Management",
        dep_Id : "mmt215kp",
        dep_hod : "chinysah charles"
    },
    {
        dep_name : "customs",
        dep_Id : "cst015kp",
        dep_hod : "Hilonga tesnah"
    }
]
const field = [
    {
        name : "softare engineering",
        acronym : "swe",
        program_duration : 3,
        parent_department : "Engineering",
        tuition : {
            year1 : [25000,250000,150000,10000],
            year2 : [25000,250000,150000,10000],
            year3 : [40000,250000,250000,15000]
        }
    },
    {
        name : "networking",
        acronym : "ntw",
        program_duration : 3,
        parent_department : "Engineering",
        tuition : {
            year1 : [25000,250000,150000,10000],
            year2 : [25000,250000,150000,10000],
            year3 : [25000,250000,250000,15000]
        }
    },
    {
        name : "transport and logistics",
        acronym : "tls",
        program_duration : 4,
        parent_department : "customs",
        tuition : {
            year1 : [25000,250000,150000,10000],
            year2 : [25000,250000,150000,10000],
            year3 : [50000,250000,250000,15000],
            year4 : [50000,250000,275000,15000]
        }
    },
]


let {validationResult} = require('express-validator')
let HttpError = require('../models/httpError')

async function sign_up_student(req,res,next){
    let err = validationResult(req)
    if(!err.isEmpty()){
        return next(new HttpError('something wrong with input',400))
    }
    let {name,dob,password,address,phone_number,email,sex} = req.body
    let tempStudent = students.filter(s => s.name === name || s.email === email)
    if(tempStudent){
        return next(new HttpError('account created with such a name or email already',400))
    }
    const newStudent = {
        name,dob,password,address,phone_number,email,sex
    }

    students.push(newStudent)
    res.json({newStudent}).status(201)
}

async function sign_in_student(req,res,next){
    let err = validationResult(req)
    if(!err.isEmpty()){
        return next(new HttpError("invalid input",400))
    }
    let {name,password} = req.body
    let found_student = students.filter(s => s.name === name)
    if(!found_student){
        return next(new HttpError('wrong credentials',400))
    }
    if(found_student.password !==password){
        return next(new HttpError('wrong credentials',400))
    }
    await res.json({found_student}).json(200)
}

async function register(req,res,next){
    let err = validationResult(req)
    if(err.isEmpty()){
        return next(new HttpError("invalid input",400))
    }
    let {student_id,amount} = req.body

    let found_student = students.filter(student => student.id === student_id)
    if(!found_student){
        return next(new HttpError('such a student does not exit',401))
    }
    found_student.amountPaid += amount
    await res.json({found_student}).status(200)
}

async function onGetTranscript(req,res,next){
    let err = validationResult(req)
    if(err.isEmpty()){
        return next(new HttpError("invalid input",400))
    }
    let {student_id,semester} = req.body
    let found_student = students.filter(student => student.id === student_id)
    if(!found_student){
        return next(new HttpError('such a student does not exit',401))
    }
    const transcript = transcripts.filter(t => t.owner_id === found_student.id)
    await res.json({transcript}).status(200)
}

async function onEditPassword(req,res,next){
    let err = validationResult(req)
    if(err.isEmpty()){
        return next(new HttpError("invalid input",400))
    }
    let {newPs,name,oldPs} = req.body
    let found_student = students.filter(student => student.name === name)
    if(!found_student){
        return next(new HttpError('such a student does not exit',401))
    }
    if(found_student.password !== oldPs){
        return next(new HttpError('such a student does not exit',401))
    }
    found_student.password = newPs
    await res.json({message : 'done'}).status(201)
}

exports.sign_up_student = sign_up_student
exports.sign_in_student = sign_in_student
exports.register = register
exports.onGetTranscript = onGetTranscript
exports.onEditPassword = onEditPassword