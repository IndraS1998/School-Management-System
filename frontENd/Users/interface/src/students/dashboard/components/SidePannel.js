import React from 'react';
import {AiOutlineHome} from 'react-icons/ai'
import {IoMdInformationCircleOutline} from 'react-icons/io'
import {CgTranscript} from 'react-icons/cg'
import {MdSchool} from 'react-icons/md'
import {FaSchool} from 'react-icons/fa'
import {BsCalendar} from 'react-icons/bs'
import {FiDownload} from 'react-icons/fi'

import ToastInfo from '../../../UIUX/ToastInfo'

const SidePannel = ({setView,student}) => {
    return (
        <section className='side_pannel'>
            <div className='center dash-link bord' onClick={()=>setView()}>
                <AiOutlineHome size='25' className='lblue-icon_color'/>
                <p className='ml-5'>dashboard</p>
            </div>
            <div className='center dash-link' onClick={()=>setView('sem')}>
                <MdSchool size='25' className='mblue-icon_color'/>
                <p className='ml-5'>my Semester</p>
            </div>
            {student.isNew?
                <div className='center dash-link' onClick={()=>setView('reg')}>
                    <CgTranscript size='25' className='lblue-icon_color'/>
                    <ToastInfo txt={'registration'} content={'continue signup process'} style={'ml-5'}/>
                    <div className='red_background center ml-4'>
                        <p>!</p>
                    </div>
                </div>
            :<div className='center dash-link' onClick={()=>setView('reg')}>
                <CgTranscript size='25' className='lblue-icon_color'/>
                <p className='ml-5'>registration</p>
            </div>}
            <div className='center dash-link' onClick={()=>setView('trans')}>
                <FiDownload size='25' className='dblue-icon_color'/>
                <p className='ml-5'>get transcript</p>
            </div>
            <div className='center dash-link' onClick={()=>setView('cal')}>
                <BsCalendar size='25' className='lblue-icon_color'/>
                <p className='ml-5'>calendar</p>
            </div>
            <div className='center dash-link' onClick={()=>setView('sch')}>
                <FaSchool size='25' className='green-icon_color'/>
                <p className='ml-5'>school info</p>
            </div>
            
            <div className='center dash-link' onClick={()=>setView('info')}>
                <IoMdInformationCircleOutline size='25' className='black-icon_color'/>
                <p className='ml-5'>personal info</p>
                {!student.imageSet && <div className='red_background center ml-4'><p>!</p></div>}
            </div>
        </section>
    );
}

export default SidePannel;
