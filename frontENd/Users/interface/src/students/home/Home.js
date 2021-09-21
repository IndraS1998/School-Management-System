import React from 'react'
import {Link} from 'react-router-dom'

import {MdSchool} from 'react-icons/md'
import {BiPhoneOutgoing} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import './components/Home.css'
import Camposes from './components/Camposes'

let Home = () =>{
    //let date = new date
    return (
        <>
            <section className='main_home'>
                <img src='./img/img2.jpg' alt='ooops!!' className='img_main'/>
                <div className='info space__around-col'> 
                    <p className='txt-main'> Welcome to KEPHIPS</p>
                    <p className='txt-medium'>Friday 10 September,2021</p>
                    <p className='txt'>
                        Hear about her vision for our School, her teaching and 
                        learning philosophy and ask the questions that are most important
                        to you in deciding what is best for your daughter's education
                    </p>
                    <Link style={{textDecoration : 'none'}} to='/register'>
                        <p className='link'>Register Now</p> 
                    </Link>
                </div>
            </section>
            <section className='space__around secondary-section '>
                <div className='col'>
                    <Link style={{textDecoration : 'none'}} to='/register'>
                        <div className='icon'><MdSchool size='80'/></div>
                    </Link>
                    <p className='black'>Admission</p>
                </div>
                <div className='col'>
                    <Link style={{textDecoration : 'none'}} to='/dashboard'>
                        <div className='icon'><CgProfile size='80'/></div>
                    </Link>
                    <p className='black'>My user account</p>
                </div>
                <div className='col'>
                    <Link style={{textDecoration : 'none'}} to='/about'>
                        <div className='icon'><BiPhoneOutgoing size='80'/></div>
                    </Link>
                    <p className='black ml-1'>Contact Us</p> 
                </div>
            </section>
            <Camposes />
        </>
    )
}

export default Home