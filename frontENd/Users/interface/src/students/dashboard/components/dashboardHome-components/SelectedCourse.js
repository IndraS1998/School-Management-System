import React from 'react'

const SelectedCourse = ({reseat_course,onRemoveReseat}) => {
    return (
        <div className='reseatCourse '>
            <div>{reseat_course.resId}</div>
            <div className='center'>
                <div className='operate_btn-red center' onClick={()=>onRemoveReseat(reseat_course)}>-</div>
            </div>
        </div>
    );
}

export default SelectedCourse;
