import React from 'react'

const ReseatCourse = ({reseat_course,onAddReseat}) => {
    return (
        <div className='reseatCourse '>
            <div>{reseat_course.resId}</div>
            <div className='center'>
                <div className='operate_btn-blue center' onClick={()=> onAddReseat(reseat_course)}>+</div>
            </div>
        </div>
    );
}

export default ReseatCourse;
