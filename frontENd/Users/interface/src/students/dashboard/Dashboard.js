import React,{useContext,useState} from 'react';
import {Link} from 'react-router-dom'

import './components/Dashboard.css'
import DisplaySection from './components/DisplaySection';
import SidePannel from './components/SidePannel';
import {context} from '../../state/reducer'

const Dashboard = () => {
    let reducer = useContext(context)
    const [dashboard,setDashboard] = useState(true)
    const [transcript,setTranscript] = useState(false)
    const [info,setInfo] = useState(false)
    const [semester,setSemester] = useState(false)
    const [calendar,setCalendar] = useState(false)
    const [registration,setRegistration] = useState(false)
    const [schoolInfo,setSchoolInfo] = useState(false)

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

    if(!reducer.logged){
        return(
            <div className='dashboard_container center'>
                <Link style={{textDecoration : 'none'}} to='/register'>
                    <p className='uppercase'>please click here to log in</p>
                </Link>
            </div>
        )
    }

    if(reducer.logged){
        return (
            <div className='center-2'> 
                <SidePannel setView={setView} student={reducer.loggedStudent}/>
                <DisplaySection reducer={reducer} transcript={transcript} registration={registration} 
                 info={info} semester={semester} calendar={calendar} dashboard={dashboard} schoolInfo={schoolInfo}/>            
            </div>
        );
    }
}

export default Dashboard;
