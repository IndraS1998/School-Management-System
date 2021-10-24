require('dotenv').config()
const {validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
 
const HttpError = require('../../models/httpError')
const {create,findOne} = require('./student.service')
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
                console.log(err)
                res.status(500).json({
                    success : 0,
                    message : 'database connection error'
                })
            }else{
                //treat token here
                if(result.length > 0){
                    res.status(500).json({
                        success : 0,
                        message : 'account already exits with these credentials here'
                    })
                }else{
                    create(body,(err,result)=>{
                        if(err){
                            console.log(err)
                            res.status(500).json({
                                success : 0,
                                message : 'database connection error'
                            })
                        }else{
                            let token
                            try{
                                let name = body.first_name + ' ' + body.last_name
                                token = jwt.sign({
                                    matricule : body.matricule,
                                    name 
                                },process.env.STUDENT_KEY,{expiresIn : '1h'}) 
                            }catch(e){
                                return next(new HttpError('server error',500))
                            }
                            findOne(body,(err,result) => {
                                if(err){
                                    console.log(err)
                                    res.status(500).json({
                                        success : 0,
                                        message : 'database connection error'
                                    })
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
        findOne(body,(err,result) => {
            if(err){
                console.log(err)
                res.status(500).json({
                    success : 0,
                    message : 'database connection error'
                })
            }else{
                let isValidPw = false
                isValidPw = bcrypt.compare(body.password,result[0].password)
                if(!isValidPw)return next(new HttpError('invalid credentials',401))
                let name = result[0].first_name + ' ' + result[0].last_name
                let token
                try{
                    token = jwt.sign({
                        matricule : result[0].matricule,
                        name
                    },process.env.STUDENT_KEY,{expiresIn:'1h'})
                }catch(e){
                    return next(new HttpError('server error, ',500))
                }
                res.status(200).json({
                    success : 1,
                    student : result[0],
                    token
                })
            }
        })
    },
    onGetTranscript : async (req,res,next) =>{
        let err = validationResult(req)
    },
    register : async (req,res,next) =>{
        let err = validationResult(req)
    },
    onEditPassword : async (req,res,next) =>{
        let err = validationResult(req)
    }
}

