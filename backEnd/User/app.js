//          @@@   IMPORTS   @@@

let express = require("express")
let body_parser = require('body-parser')

let lecturer_routes = require('./src/routes/lecturer_routes')
let student_routes = require('./src/routes/student_routes')

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
app.use('/lecturers',lecturer_routes)
app.use('/student',student_routes)


//          @@@   CONNECTION   @@@
app.listen(5000,()=>console.log("app running on port 5000"))