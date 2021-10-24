import React from 'react'
import {MdClose} from 'react-icons/md'
import {AiOutlineHome} from 'react-icons/ai'
import {IoMdInformationCircleOutline} from 'react-icons/io'
import {CgTranscript} from 'react-icons/cg'
import {MdSchool} from 'react-icons/md'
import {FaSchool} from 'react-icons/fa'
import {BsCalendar} from 'react-icons/bs'
import {FiDownload} from 'react-icons/fi'

const DashboardModal = ({reducer}) => {
    let {setView} = reducer

    return (
        <section className='.dashboard_modal-body'>
            <section className='modal_container-2 animate one fadeInLeft'>
            <section className='space__between menu_head-dashboard'>
                <div className='capitalize modal_header-dashboard'>Menu</div>
                <div></div>
                <div className='modal_header-dashboard' onClick={reducer.onCloseModal}>
                    <MdClose className='mr-4 modal_close-dashboard' size='30'/>
                </div>
            </section>
            <section className='col link_container'>
                    <div className='dashboard_field-container' onClick={() =>{
                                setView()
                                reducer.onCloseModal()
                            }}>
                        <div className='dashboard_field-first'>
                            <AiOutlineHome size='25' className='black-icon_color'/>
                        </div>
                        <div className='dashboard_field-second' >
                            <p className='linker-dashboard mt-5' >home</p>
                        </div>
                    </div>
                    <div className='dashboard_field-container' onClick={() => {
                            setView('sem')
                            reducer.onCloseModal()}}>
                        <div className='dashboard_field-first'>
                            <MdSchool size='25' className='mblue-icon_color'/>
                        </div>
                        <div className='dashboard_field-second'>
                            <p className='linker-dashboard' >semester</p>
                        </div>
                    </div>
                    <div className='dashboard_field-container' onClick={() => {
                            setView('reg')
                            reducer.onCloseModal()}}>
                        <div className='dashboard_field-first'>
                            <CgTranscript size='25' className='lblue-icon_color'/>
                        </div>
                            <div className='dashboard_field-second'>
                                <p className='linker-dashboard' >registration</p>
                        </div>
                    </div>
                    <div className='dashboard_field-container' onClick={() => {
                            setView('trans')
                            reducer.onCloseModal()}}>
                        <div className='dashboard_field-first'>
                            <FiDownload size='25' className='dblue-icon_color'/>
                        </div>
                        <div className='dashboard_field-second' >
                            <p className='linker-dashboard' >get transcript</p>
                        </div>
                    </div>
                    <div className='dashboard_field-container' onClick={() =>{
                            setView('cal')
                            reducer.onCloseModal()}}>
                        <div className='dashboard_field-first'>
                            <BsCalendar size='25' className='lblue-icon_color'/>
                        </div>
                        <div className='dashboard_field-second' >
                        <p className='linker-dashboard' >calendar</p>
                        </div>
                    </div>
                    <div className='dashboard_field-container' onClick={() =>{
                            setView('sch')
                            reducer.onCloseModal()}}>
                        <div className='dashboard_field-first'>
                            <FaSchool size='25' className='green-icon_color'/>
                        </div>
                        <div className='dashboard_field-second'>
                            <p className='linker-dashboard' >school info</p>
                        </div>
                    </div>
                    <div className='dashboard_field-container' onClick={() =>{
                            setView('info')
                            reducer.onCloseModal()}}>
                        <div className='dashboard_field-first'>
                            <IoMdInformationCircleOutline size='25' className='black-icon_color'/>
                        </div>
                        <div className='dashboard_field-second'>
                            <p className='linker-dashboard' >personal info</p>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}

export default DashboardModal;
