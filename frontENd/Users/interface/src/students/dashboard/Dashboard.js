import React,{useContext,useState} from 'react';
import {Link} from 'react-router-dom'

import './components/Dashboard.css'
import DisplaySection from './components/DisplaySection';
import SidePannel from './components/SidePannel';
import {context} from '../../state/reducer'

const Dashboard = () => {
    let reducer = useContext(context)

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
                <SidePannel setView={reducer.setView} student={reducer.loggedStudent}/>
                <DisplaySection reducer={reducer} transcript={reducer.transcript} registration={reducer.registration} 
                 info={reducer.info} semester={reducer.semester} calendar={reducer.calendar} dashboard={reducer.dashboard} schoolInfo={reducer.schoolInfo}/>            
            </div>
        );
    }
}

export default Dashboard;
