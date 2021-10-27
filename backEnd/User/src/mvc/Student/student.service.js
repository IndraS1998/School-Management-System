const { query } = require('../../config/database')
const pool = require('../../config/database')

module.exports = {
    create : async (data, callback) => {
        await pool.query(
            `INSERT INTO students(matricule,first_name,last_name,date_of_birth,
            phone_number,email,password,sex,guardian_first_name,guardian_last_name,
            guardian_id_number,guardian_contact,id_number,place_of_birth,address)
            VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
        [
            data.matricule,data.first_name,data.last_name,data.date_of_birth,
            data.phone_number,data.email,data.password,data.sex,data.guardian_first_name,data.guardian_last_name,
            data.guardian_id_number,data.guardian_contact,data.id_number,data.place_of_birth,data.address
        ],
        (error,results,fields) =>{
            if(error) return callback(error)
            return callback(null, results)
        })
    },

    findOne : async (data,cb) =>{
        await pool.query(
            `SELECT * FROM students WHERE email = ? OR matricule=?`,
            [data.email,data.matricule],
            function (error,result){
                if(error)return cb(err)
                return cb(null,result)
            }
        )       
    },

    update : async (data,cb) =>{
        await pool.query(
            `UPDATE students SET department = ?,speciality=?,isRegistered=?,file_path=?,program=?
            WHERE matricule=?`,
            [data.department,data.speciality,true,data.file_path,data.program,data.matricule],
            (error,results,fields) =>{
                if(error){
                    console.log(error)
                    return cb(error)
                }
                return cb(null, results)
            } 
        )     
    },

    updatePassword : async (data,cb) =>{
        await pool.query(
            `Update students SET password = ? WHERE matricule =?`,
            [data.newPassword,data.matricule],
            (error,result,field)=>{
                if(error)return cb(error)
                return cb(null,result)
            }
        )
    },

    getPersonalCourses : async (data,cb)=>{
        await pool.query(
            `SELECT * FROM courses WHERE speciality = ?`,
            [data],
            (err,result,field)=>{
                if(err) return cb(err)
                return cb(null,result)
            }
        )
    },

    getPersonalTimeTable : async (data,cb) =>{
        await pool.query(
            `SELECT * FROM timetables WHERE program = ?`,
            [data],
            (err,result,field)=>{
                if(err) return cb(err)
                return cb(null,result)
            }
        )
    },

    getDepartments : async cb =>{
        await query.pool(
            `SELECT * FROM departments`,
            [],
            (err,results,field)=>{
                if(err)return cb(err)
                return cb(null,results)
            }
        )
    },

    getSpecialities : async cb =>{
        await query.pool(
            `SELECT * FROM specialities`,
            [],
            (err,res,field)=>{
                if(err)return cb(err)
                return cb(null,res)
            }
        )
    },

    getPrograms : async cb =>{
        await query.pool(
            `SELECT * FROM programs`,
            [],
            (err,res,f) =>{
                if(err)return cb(err)
                return cb(null,res)
            }
        ) 
    },

    getAllStudents : async cb =>{
        await query.pool(
            `SELECT * FROM students`,
            [],
            (err,r,f) =>{
                if(err)return cb(err)
                return cb(null,r)
            }
        )
    },

    getStudentsPerSpecialty : async (body,cb)=>{
        await query.pool(
            `SELECT * FROM students WHERE speciality=?`,
            [speciality],
            (err,result,field)=>{
                if(err)return cb(err)
                return cb(null,result)
            }
        )
    }
}