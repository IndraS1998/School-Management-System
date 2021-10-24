require('dotenv').config()
//          @@@   IMPORTS   @@@

let express = require("express")
let body_parser = require('body-parser')

const student_routes = require('./src/mvc/Student/student.router')

//          @@@   EXECUTION   @@@

let app = express()
app.use(body_parser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

    next();
});


//          @@@   ROUTES   @@@
app.use('/student',student_routes)


//          @@@   CONNECTION   @@@
app.listen(process.env.APP_PORT,()=>console.log("app running on port",process.env.APP_PORT))