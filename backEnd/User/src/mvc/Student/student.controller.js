require('dotenv').config()
const {validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
 
const HttpError = require('../../models/httpError')
const Matricule = require('../../models/matricule')
const {create,findOne,update,getDepartments,getSpecialities,getPrograms,getAllStudents,getStudentsPerSpecialty,
    updatePassword,getPersonalCourses,getPersonalTimeTable} = require('./student.service')
const pool = require('../../config/database')

module.exports = {
    signup : async (req,res,next) =>{
        let err = validationResult(req)
        if(!err.isEmpty())return next( new HttpError('invalid input',401))
        const body = req.body
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(body.password,12);
        }catch (e) {
            return next(new HttpError('something went wrong please try again later',500))
        }
        body.password = hashedPassword

        findOne(body,(err,result)=>{
            if(err){
                return next(new HttpError('server connection error',500))
            }else{
                //treat token here
                if(result.length > 0){
                    return next(new HttpError('user already exists',400))
                }else{
                    let studentCounter
                    getAllStudents((err,r)=>{
                        if(err){
                            return next(new HttpError('internal server error',500))
                        }else{
                            studentCounter = r.length + 1
                        }
                    })
                    const temporaryMatricule = `kelden ${studentCounter}`
                    body.matricule = temporaryMatricule
                    create(body,(err,result)=>{
                        if(err){
                            return next(new HttpError('server error',500))
                        }else{
                            let token
                            try{
                                let name = body.first_name + ' ' + body.last_name
                                token = jwt.sign({
                                    matricule : temporaryMatricule,
                                    name 
                                },process.env.STUDENT_KEY,{expiresIn : '1h'}) 
                            }catch(e){
                                return next(new HttpError('server error',500))
                            }
                            findOne(body,(err,result) => {
                                if(err){
                                    return next(new HttpError('server error',500))
                                }else{
                                    res.status(201).json({
                                        success : 1,
                                        student : result[0],
                                        token
                                    })
                                }
                            })
                        }
                    })
                }
            }
        })
    },

    login : async (req,res,next) =>{
        let err = validationResult(req)
        if(!err.isEmpty()) return next(new HttpError('invalid input',401))
        const body = req.body
        await findOne(body,(err,result) => {
            if(err)return next(new HttpError('server error',500))
            let isValidPw = false
            isValidPw = bcrypt.compare(body.password,result[0].password)
            if(!isValidPw)return next(new HttpError('invalid credentials',401))
            let name = result[0].first_name + ' ' + result[0].last_name
            let token
            try{
                token = jwt.sign({
                    matricule : result[0].matricule,
                    name,speciality : result[0].specialty
                },process.env.STUDENT_KEY,{expiresIn:'1h'})
            }catch(e){
                return next(new HttpError('server error, ',500))
            }
            res.status(200).json({
                success : 1,
                student : result[0],
                token
            })
        })
    },

    onGetTranscript : async (req,res,next) =>{
        let err = validationResult(req)
    },

    register : async (req,res,next) =>{
        let err = validationResult(req)
        if(!err.isEmpty())return next(new HttpError('please fill all inputs',401))
        const body = req.body
        let studentCount
        //generate matricule
        getStudentsPerSpecialty(specialty,(err,r)=>{
            if(err){
                return next(new HttpError('internal server error',500))
            }else{
                studentCount = r.length + 1 
            }
        })
        const m = new Matricule(body.specialityCode,studentCount)
        body.matricule = m
        update(body,(err,results)=>{
            if(err)return next(new HttpError('server error',500))
            findOne(body,(err,result) => {
                if(err)return next(new HttpError('server error',500))
                res.status(201).json({
                    success : 1,
                    student : result[0]
                })
            })
        })        
    },

    onEditPassword : async (req,res,next) =>{
        let err = validationResult(req)
        if(!err.isEmpty()) return next(new HttpError('invalid fields',400))
        const body = req.body
        await findOne(body,async (err,result) => {
            if(err)return next(new HttpError('server error',500))
            let isValidPw = false
            isValidPw = bcrypt.compare(body.oldPassword,result[0].password)
            if(!isValidPw)return next(new HttpError('invalid credentials',401))
            let hashedPassword;
            try{
                hashedPassword = await bcrypt.hash(body.newPassword,12);
            }catch(e){
                return next(new HttpError('something went wrong please try again later',500))
            }
            body.newPassword = hashedPassword
            await updatePassword(body,(err,r)=>{
                if(err)return next(new HttpError('server error',500))
                res.status(200).json({
                    success : 1,
                    message : "successfully edited password"
                })
            })
        })
    },

    getCourses : async (req,res,next) =>{
        let err = validationResult(req)
        if(!err.isEmpty()) return next(new HttpError('invalid fields',400))
        const body = req.body
        await getPersonalCourses(body.speciality,(err,r)=>{
            if(err)return next(new HttpError('server error',500))
            res.status(200).json({
                success : 1,
                courses : r
            })
        })
    },

    getTimeTable : async (req,res,next)=>{
        let err = validationResult(req)
        if(!err.isEmpty()) return next(new HttpError('invalid fields',400))
        const body = req.body
        await getPersonalTimeTable(body.program,(err,r)=>{
            if(err)return next(new HttpError('server error',500))
            res.status(200).json({
                success : 1,
                courses : r
            })
        })
    },

    departments : async (req,res,next)=>{
        await getDepartments((err,r)=>{
            if(err)return next(new HttpError('server error',500))
            res.status(200).json({
                success : 1,
                departments : r
            })
        })
    },

    specialities : async (req,res,next)=>{
        await getSpecialities((err,r)=>{
            if(err)return next(new HttpError('server error',500))
            res.status(200).json({
                success : 1,
                specilities : r
            })
        })
    },

    programs : async ( req,res,next) =>{
        await getPrograms((err,r)=>{
            if(err)return next(new HttpError('server error',500))
            res.status(200).json({
                success : 1,
                programs : r
            })
        })
    }
}

