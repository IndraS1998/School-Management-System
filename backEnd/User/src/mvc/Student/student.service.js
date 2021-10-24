const pool = require('../../config/database')

module.exports = {
    create : async (data, callback) => {
        await pool.query(
            `insert into students(matricule,first_name,last_name,date_of_birth,
            phone_number,email,password,sex,guardian_first_name,guardian_last_name,
            guardian_id_number,guardian_contact,id_number,place_of_birth,address)
            values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
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
            `select * from students where email = ?`,
            [data.email],
            function (error,result){
                if(error)return cb(err)
                return cb(null,result)
            }
        )       
    }
}