import React from 'react'
import {Link} from 'react-router-dom'
import {MdClose} from 'react-icons/md'

const MenuModal = ({reducer}) => {

    return (
        <section className='modal_container animate one fadeInDown'>
            <section className='space__between menu_head'>
                <div className='capitalize modal_header ml-4'>Menu</div>
                <div></div>
                <div className='modal_header' onClick={reducer.onCloseModal}>
                    <MdClose className='mr-4 modal_close' size='30'/>
                </div>
            </section>
            <section className='col link_container'>
                <Link style={{textDecoration:'none'}} to='/'>
                    <p className='linker ' onClick={reducer.onCloseModal}>home</p>
                </Link>
                <Link to='/about'style={{textDecoration : 'none'}}>
                    <p className='linker ' onClick={reducer.onCloseModal}>about</p>
                </Link>
                <Link style={{textDecoration : 'none'}} to='/register'>
                    <p className='linker ' onClick={reducer.onCloseModal}>procedures</p>
                </Link>
                <Link style={{textDecoration : 'none'}} to='/dashboard'>
                    <p className='linker ' onClick={reducer.onCloseModal}>my account</p>
                </Link>
                <Link style={{textDecoration : 'none'}} to='/'>
                    <p className='linker ' onClick={reducer.onCloseModal}>localization</p>
                </Link>
            </section>
        </section>
    );
}

export default MenuModal;
