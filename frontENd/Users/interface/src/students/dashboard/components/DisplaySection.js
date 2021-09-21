import React from 'react';
import Calendar from '../slides/Calendar';
import Mysemester from '../slides/Mysemester';
import Payments from '../slides/Payments';
import PersonalInfo from '../slides/PersonalInfo';
import SchoolInfo from '../slides/SchoolInfo';
import Transcript from '../slides/Transcript';
import Dashboard_home from './Dashboard_home';
import DisplayNav from './DisplayNav';

const DisplaySection = ({reducer,dashboard,transcript,info,semester,calendar,registration,schoolInfo}) => {

    let {departments} = reducer

    return (
        <div className='display_section'>
            <DisplayNav user={reducer.loggedStudent} onLogOut={reducer.onLogOut}/>
            {dashboard && <Dashboard_home departments={departments}/>}
            {transcript && <Transcript />}
            {info && <PersonalInfo reducer={reducer}/>}
            {semester && <Mysemester reducer={reducer}/>}
            {calendar && <Calendar />}
            {registration && <Payments reducer={reducer}/>}
            {schoolInfo && <SchoolInfo reducer={reducer}/>}
        </div>
    );
}

export default DisplaySection;
