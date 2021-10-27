require('dotenv').config()
const jwt = require('jsonwebtoken')
const HttpError = require('../models/httpError')

module.exports = {
    student : (req,res,next)=>{
        if(req.method === 'OPTIONS') return next()
        try{
            const authHeader = req.headers['authorization']
            const token = authHeader && authHeader.split(' ')[1]
            if(!token) return next(new HttpError('access denied',401))
            jwt.verify(token,process.env.STUDENT_KEY,(err,user)=>{
                if(err)return next(new HttpError('access denied',403))
                req.user = user
                next()
            })
        }catch(e){
            return next(new HttpError('connection error please try again later',500))
        }
    }
}