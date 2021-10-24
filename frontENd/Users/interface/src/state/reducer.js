import React,{createContext,useState} from "react"
import {data} from './data'

let context = createContext(data)
let {Provider} = context

let ContextReducer = ({children}) =>{
    /*          ###STATE###         */
    let [logged,setLogged] = useState(true)
    let [loggedStudent,setLoggedStudent] = useState(data.students[0])
    let [isModalOpen,setIsModalOpen] = useState(false)
    let [modalTrigger,setModalTrigger] = useState('')
    let [departments,setDepartments] = useState(data.departments)
    let [students,setStudents] = useState(data.students)
    let [courses,setCourses] = useState(data.Courses)
    let [specialities,setSpecialities] = useState(data.Specilities)
    const [dashboard,setDashboard] = useState(true)
    const [transcript,setTranscript] = useState(false)
    const [info,setInfo] = useState(false)
    const [semester,setSemester] = useState(false)
    const [calendar,setCalendar] = useState(false)
    const [registration,setRegistration] = useState(false)
    const [schoolInfo,setSchoolInfo] = useState(false)

    /*          @@@METHODS@@@           */
    let onLogin = (em,pw) =>{
        //find the student
        let foundStudent = null
        let error = false
        foundStudent = students.find(student => student.email === em)
        if(!foundStudent || foundStudent.password !== pw){
            error = true
        }else{
            setLoggedStudent(foundStudent)
            setLogged(true)
        }
        return error
    }

    let onSignUp = (fn,ln,phone,email,password,dob,sex) =>{
        let foundStudent = null
        let err = false

        foundStudent = students.find(student => student.email === email)
        if(foundStudent){
            err = true
        }else{
            const newStudent = {
                first_name:fn,
                last_name:ln,
                DOB : dob,
                Sex : sex,
                email,
                contact : phone,
                password,
                imageSet:false,
                isNew:true,
            }
            let updatedStudents = students.push(newStudent)
            setStudents(updatedStudents)
            setLoggedStudent(newStudent)
            setLogged(true)
        }
        return err
    }

    let onSetStudentDetails = async (department,spec,prog,transactionNumber,file) =>{
        
        let isErr = false

        let {email} = loggedStudent
        
        let foundStudent = students.filter(student => student.email == email)

        if(!foundStudent){
            isErr = true 
        }else{
            let {Department,specialty,isNew,program,filePath} = foundStudent
            Department = department
            specialty = spec
            program = prog
            filePath = file
            isNew = false
            let updatedStudents = students.push(foundStudent)
            setStudents(updatedStudents)
        }

    }
    
    let onLogOut = () => {
        setLoggedStudent(null)
        setLogged(false)
    }

    const onEditPw = () =>{}

    /*          @@@         Dashboard           @@@          */
    function resetAll(){
        setDashboard(false);setTranscript(false);setInfo(false);
        setSemester(false);setCalendar(false);setRegistration(false)
        setSchoolInfo(false)
    }

    function setView(v){
        switch(v){
            case 'trans':
                resetAll()
                setTranscript(true)
                break;
            case 'info':
                resetAll()
                setInfo(true)
                break;
            case 'sem':
                resetAll()
                setSemester(true)
                break;
            case 'cal':
                resetAll()
                setCalendar(true)
                break;
            case 'reg':
                resetAll()
                setRegistration(true)
                break;
            case 'sch':
                resetAll()
                setSchoolInfo(true)
                break;
            default:
                resetAll()
                setDashboard(true)
                break;
        }
    }

    /*          @@@              MODAL           @@@            */
    const onOpenModal = (modalTrigger) =>{
        setIsModalOpen(true)
        setModalTrigger(modalTrigger)
    }

    const onCloseModal = () =>{
        setIsModalOpen(false)
        setModalTrigger('')
    }

    return (
        <div>
            <Provider value={{onEditPw,logged,onLogOut,onLogin,onSignUp,onSetStudentDetails,dashboard,transcript,info,semester
                    ,isModalOpen,onCloseModal,onOpenModal,setModalTrigger,modalTrigger,setView,calendar,registration,schoolInfo,
                    loggedStudent,departments,courses,specialities,setIsModalOpen}}>
                {children}
            </Provider>
        </div>
    )
}

export {ContextReducer,context}