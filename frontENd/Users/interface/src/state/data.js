//database name : keldensystem

export const data = {
    students : [
        {
            matricule:'swe21kp31', //done by server
            first_name : 'Ngo',
            last_name : 'Lissom',
            Department : "Engineering",
            DOB : "21/01/1999", 
            specialty : "Software Engineering",
            Sex : "Female", 
            transcript_num : "xtfswe0121", // done by server
            img : '',
            filePath : '',
            email:'ngolissom@yahoo.com',
            contact:654565256,
            program:'HND',
            year : 1,
            password:'ngolissom',
            imageSet:false,
            isNew:false,
            attemptedCredit:55,
            validatedCredit:45,
            inbox : [],
            coursesSelectedForReseat : [],
            reseatCourses : [{resId : 'SWE 215'},{resId : 'SWE 308'},{resId : 'SWE 115'},
            {resId : 'FRE 101'},{resId : 'ACC 303'}]
        }
    ],
    departments : [
        {
            name : "management",
        },
        {
            name : "finance and commerce",
        },
        {
            name : "Engineering",
        },
        {
            name : "medical science",
        }
    ],
    
    Specilities : [
        {
            id : "swe",
            name : "Software Engineering",
            num_years : 3,
            tuitions:[
                {
                    firstInstallment : [150000,25000],
                    registration : [50000,50000],
                    secondInstallment : [150000,0],
                    thirdInstallment : [100000,0],
                    others : [50000,50000],
                },
                {
                    firstInstallment : [150000,100000],
                    registration : [50000,50000],
                    secondInstallment : [150000,0],
                    thirdInstallment : [100000,100000],
                    others : [50000,50000]
                },
                {
                    firstInstallment : [150000,0],
                    registration : [50000,50000],
                    secondInstallment : [150000,0],
                    thirdInstallment : [100000,0],
                    others : [50000,50000]
                }
            ],
            dep_mame : 'Engineering',
            num_credit : 180
        },
        {
            id : "mdw",
            name : "mid wifery",
            num_years : 4,
            tuitions:{
                yearOne : {
                    firstInstallment : 150000,
                    registration : 50000,
                    secondInstallment : 150000,
                    thirdInstallment : 100000,
                    others : 50000,
                },
                yearTwo : {
                    firstInstallment : 200000,
                    registration : 50000,
                    secondInstallment : 150000,
                    thirdInstallment : 100000,
                    others : 100000,
                },
                yearThree : {
                    firstInstallment : 250000,
                    registration : 50000,
                    secondInstallment : 200000,
                    thirdInstallment : 150000,
                    others : 100000,
                },
                yearFour : {
                    firstInstallment : 250000,
                    registration : 50000,
                    secondInstallment : 200000,
                    thirdInstallment : 150000,
                    others : 100000,
                }
            },
            dep_mame : 'Engineering',
            num_credit : 180
        }
    ],
    Courses : [
        {
            id : "swe101",
            name : 'maths',
            yearDone : 2,
            cc : 5,
            doneBy : ['swe'],
            lecturer : 'penda Daniel',
            ca : 5,
            exam : 65
        },
        {
            id : "swe302",
            name : 'web development',
            cc : 5,
            doneBy : ['swe'],
            yearDone : 3,
            lecturer : 'penda Daniel',
            ca : 5,
            exam : 65
        },
        {
            id : "swe208",
            name : 'database design',
            cc : 3,
            doneBy : ['swe'],
            lecturer:'houston penda',
            yearDone : 1,ca : 5,
            exam : 65
        },
        {
            id : "swe252",
            name : 'object modelling',
            cc : 5,
            doneBy : ['swe'],
            yearDone : 2,
            lecturer : 'penda Daniel',ca : 5,
            exam : 65
        },
        {
            id : "swe345",
            name : 'project',
            cc : 12,
            doneBy : ['swe'],
            yearDone : 3,
            lecturer : 'penda Daniel',ca : 5,
            exam : 65
        },
        {
            id : "swe247",
            name : 'progeamming 1',
            cc : 5,
            doneBy : ['swe'],
            yearDone : 2,
            lecturer : 'penda Daniel',ca : 5,
            exam : 65
        },
        {
            id : "swe147",
            name : 'maths 2',
            cc : 3,
            doneBy : ['swe'],
            yearDone : 1,
            lecturer : 'penda Daniel',ca : 5,
            exam : 65
        },
        {
            id : "swe135",
            name : 'data science 1',
            cc : 5,
            doneBy : ['swe'],
            yearDone : 2,
            lecturer : 'penda Daniel',ca : 5,
            exam : 65
        },
        {
            id : "swe265",
            name : 'maths 2',
            cc : 8,
            doneBy : ['swe'],
            yearDone : 2,
            lecturer : 'penda Daniel',ca : 5,
            exam : 65
        }
    ],
    lecturers : [
        {
            name : 'penda Daniel',
            field : 'digital literacy'
        },
        {
            name : 'penda Daniel',
            field : 'digital literacy'
        },
        {
            name : 'penda Daniel',
            field : 'digital literacy'
        }
    ]
}