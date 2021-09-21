import React,{useState,useContext} from 'react'

import {context} from '../../state/reducer'
import Signup from './components/Signup'
import Login from './components/Login'
import ToastSuccess from '../../UIUX/ToastSuccess'
import { Link } from 'react-router-dom'

let Register = () =>{
    const [auth,setAuth] = useState(false)
    const reducer = useContext(context)
    const onToggleAuth = () => setAuth(!auth)

    const d = new Date()
    let month
    let day



    switch (d.getMonth()) {
        case 0:
            month = 'January'
            break;
        case 1:
            month = 'Febraury'
            break;
        case 2:
            month = 'March'
            break;
        case 3:
            month = 'April'
            break;
        case 4:
            month = 'May'
            break;
        case 5:
            month = 'June'
            break;
        case 6:
            month = 'July'
            break;
        case 7:
            month = 'August'
            break;
        case 8:
            month = 'September'
            break;
        case 9:
            month = 'October'
            break;
        case 10:
            month = 'November'
            break;
        case 11:
            month = 'December'
            break;
        default:
            break;
    }

    switch (d.getDay()) {
        case 1:
            day = 'monday'
            break;
        case 2:
            day = 'Tuesday'
            break;
        case 3:
            day = 'wednesday'
            break;
        case 4:
            day = 'thursday'
            break;
        case 5:
            day = 'friday'
            break;
        case 6:
            day = 'saturday'
            break;
        case 7:
            day = 'sunday'
            break;
        default:
            break;
    }
    var today = day+ ' '+d.getDate() + ' '+ month+ ',' + ' '+ d.getHours() +':' + d.getMinutes()

    if(reducer.logged){
        return (
            <>
            <section className='main_section col'>
                <section className='first-section'>
                    <p className='main-header'>Open Morning</p>
                    <p className='secondary-header mt-5 ml-3'>{today}</p>
                </section>
                <section className='image-container mb-5'>
                    <img src='./img/img1.jpg' className='img'/>
                </section>
                <div className='flex__start-start info-header-section first-section'>
                    <p className='info_header mt-5'>registration process in KEBHIPS</p>
                </div>
                <section className='text-section'>
                    <p>We are very proud to welcomeyou in an institution that stands out through its professional educational
                        project, allowing for the promotion of academic excellence and professionaalism amoung our students
                        , while giving them the opportunity to broadentheir horiwons upon meetingother people and exchanging ideas
                    </p>
                    <p className='mt-3'>
                        our priority is to ensure that every student can reach his or her full potential and achieve his/her 
                        professional and academic goals in a condusive environment
                    </p>
                    <p className='mt-3'>
                        throught your Studies in Keldon Institute, you will grow to be more self-sufficient, resourceful
                         and develop a CAN-DO attitude that will make all the difference in your professional life 
                    </p>
                </section>
                <div className='welcome_container col'>
                    <p className='mb-3'>welcome <span className='text-name'>{reducer.loggedStudent.first_name}</span></p>
                    <Link to='/dashboard' style={{textDecoration : 'none'}}>
                        <ToastSuccess content={'sucessfully created account'} txt={'access my dashboard'}/>
                    </Link>
                </div>
            </section>
        </>
        )
        
    }

    return (
        <>
            <section className='main_section col'>
                <section className='first-section'>
                    <p className='main-header'>Open Morning</p>
                    <p className='secondary-header mt-5 ml-3'>{today}</p>
                </section>
                <section className='image-container'>
                    <img src='./img/img1.jpg' className='img'/>
                </section>
                <p className='info_header mt-5'>registration and admission process in KEBHIPS</p>
                <section className='text-section'>
                    <p className='mb-5 registration_txt-main'>The registration and admission process is fairly simple in
                        our institution. First comes the registration phase of the student 
                        in which the interestedparty applies for admission in KELDEN
                    </p>
                    <div className=' col mt-5'>
                        <div className='admission_container center'>
                            <h3 className='adission_info'>1</h3>
                        </div>
                        <div className='registration_txt'> <span className='ml-5'></span>Simply fill the form below which requires your basic information such as name and date of birth.
                            this will lead to the creation of a personalized KELDEN account which you can log into
                             with your email address and password.
                            <div className='mt-3'>
                                <span className='ml-5'></span>This account will be used throughout your academic parcourp at KEBHIPS
                                and will serve as a means of interaction between you and the institution.
                                You will be able to use your account to view your results, pay your fees and much more 
                            </div> 
                        </div>
                    </div>
                    <div className=' col mt-5 registration_txt'>
                        <div className='admission_container center'>
                            <h3 className='adission_info'>2</h3>
                        </div>
                        <div>
                            <span className='ml-5'></span>After your account is created, you a propted to open your personal dashboard.
                                You will then be required to submit additional information partaining to 
                                your academic admission in KEBHIPS such as your department and specialty
                        </div>
                        <div className='mt-3'>
                            <span className='ml-5'></span> You can also edit your personal settings in the personal info page such
                            as uploading profile image and editing your user password
                        </div> 
                    </div>
                    <div className='registration_txt col mt-5'>
                        <div className='admission_container center'>
                            <h3 className='adission_info'>3</h3>
                        </div>
                        <div>
                            <span className='ml-5'></span>The last phase is left to the administration, your profile will be studied
                            the result will be communicated to your email address. if it is not successfull, your student account will be deleted
                            by the administration
                        </div> 
                        <div className='mt-3'>
                            <span className='ml-5'></span>In case of success, your natricule will be communicated to you in your user account
                            and you can view more info such as the calendar, your courses for the semester etc 
                        </div> 
                    </div>
                </section>
            </section>
            {!auth?
                <Signup onSignUp={reducer.onSignUp} onToggleAuth={onToggleAuth}/>:
                <Login onLogin={reducer.onLogin} onToggleAuth={onToggleAuth}/>}
        </>
    )
}

export default Register