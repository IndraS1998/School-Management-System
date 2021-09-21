import React from 'react';

const InformativeDashboard = ({dName}) => {
    return (
        <div className='informative_dashboard'>
            <p className='heading-dashboard mt-1 ml-2'>{dName}</p>
            <div className='space__between head-above'>
                <p className='info-dashboard'>schools</p>
                <div className='number_info-section-green center mr-5'>
                    <p className='number_info-green'>6</p>
                </div>
            </div>
        </div>
    );
}

export default InformativeDashboard;
