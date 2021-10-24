import React,{useContext,useState} from 'react'
import {context} from '../state/reducer'

import MenuModal from './components/MenuModal'
import './Modal.css'
import DashboardModal from './components/DashboardModal'

const Modal = () => {
    const reducer = useContext(context)

    if(reducer.modalTrigger === 'menu'){
        return <MenuModal reducer = {reducer}/>
    } 

    if(reducer.modalTrigger === 'dashboard'){
        return <DashboardModal reducer= {reducer} />
    }

    return (
        <div className='modal_container'>
            
        </div>
    );
}

export default Modal;
