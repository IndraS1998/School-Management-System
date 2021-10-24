import React,{useState} from 'react'

import './Dashboard_Home.css'
import ReseatCourse from './dashboardHome-components/ReseatCourse'
import SelectedCourse from './dashboardHome-components/SelectedCourse'
/* 
    ** number of credit required and credit fulfilled
    ** number of courses registered and courses validated
    ** number of courses failed and number of courses to be reseated
    ** courses selected pending for reseat semester
*/
const Dashboard_home = ({reducer}) => {

    /*          ###              STATE           ###            */
    const {loggedStudent} = reducer
    const myDepartment = reducer.specialities.find(s => s.name === loggedStudent.specialty)
    const [availableReseats,setAvailableReseats] = useState([...loggedStudent.reseatCourses])
    const [selectedReseats,setSelectedReseats] = useState([])
    

    /*          ###             METHODS         ###             */
    function addReseatHandler(reseat){
        let newReseats = availableReseats.filter(r => r.resId !== reseat.resId)
        setAvailableReseats(newReseats)
        setSelectedReseats([...selectedReseats , reseat])
    }

    function removeReseatHandler(reseat){
        let newReseats = selectedReseats.filter(r => r.resId !== reseat.resId)
        setSelectedReseats(newReseats)
        setAvailableReseats([...availableReseats , reseat])
    }


    return (
        <section className='dashboard-home-main'>
            <section className='credit-section'> 
                <div className='dashboard-info space__around-col'>
                    <div>
                        <h3 className='dashboard-info-header'>Required credit</h3>
                    </div>
                    <div>
                        <p>{myDepartment.num_credit}</p>
                    </div>
                </div>
                <div className='dashboard-info space__around-col'>
                    <div>
                        <h4 className='dashboard-info-header-2'>attempted credit</h4>
                    </div>
                    <div>
                        <p>{loggedStudent.attemptedCredit}</p>
                    </div>
                </div>
                <div className='dashboard-info space__around-col'>
                    <div>
                        <h4 className='dashboard-info-header-2'>validated credit</h4>
                    </div>
                    <div>
                        <p>{loggedStudent.validatedCredit}</p>
                    </div>
                </div>
            </section>
            <section className='credit_headingContainer'>
                <p className='credit_headingContainer-p'>Available Reseats</p>
                <p className='credit_headingContainer-p'>Selected Reseats</p>
            </section>
            <section className='reseat_section '>
                <div className='reseat_partition'>
                    <div className='reseat_container'>
                        {availableReseats.map(r => <ReseatCourse reseat_course={r}
                                 onAddReseat={addReseatHandler}/>)}
                    </div>
                </div>
                <div className='reseat_partition'>
                    <div className='reseat_container'>
                        {selectedReseats.map(r => <SelectedCourse reseat_course={r}
                             onRemoveReseat={removeReseatHandler}/>)}
                    </div>
                    
                </div>
            </section>
        </section>
    );
}

export default Dashboard_home;
