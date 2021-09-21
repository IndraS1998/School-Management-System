import React from 'react'
import './Home.css'

const Camposes = () =>{
    return (
        <section className='campos_section'>
            <h3 className='campos_header mt-4 ml-5'>Our campuses</h3>
            <div className='campus_image-section mt-5 pb-3'>
                <div className='col mb-3 ml-3'>
                    <img src='./img/img1.jpg' alt='oopss!!' className='campos_image'/>
                    <p className='center mt-5 campos_txt'>
                    Hear about her vision for our School, her teaching and 
                        learning philosophy and ask the questions that are most important
                        to you in deciding what  
                    </p>
                    <p className='campos_btn center mt-5'>Learn More</p>
                </div>
                <div className='col ml-3 mb-3'>
                    <img src='./img/img2.jpg' alt='oopss!!' className='campos_image'/>
                    <p className='center mt-5 campos_txt'>
                    Hear about her vision for our School, her teaching and 
                        learning philosophy and ask the questions that are most important
                        to you in deciding what   
                    </p>
                    <p className='campos_btn center mt-5'>Learn More</p>
                </div>
                <div className='col ml-3 mb-3'>
                    <img src='./img/img3.jpg' alt='oopss!!' className='campos_image'/>
                    <p className='center mt-5 campos_txt'>
                    Hear about her vision for our School, her teaching and 
                        learning philosophy and ask the questions that are most important
                        to you in deciding what  
                    </p>
                    <p className='campos_btn center mt-5'>Learn More</p>
                </div>
            </div>
        </section>
    )
}

export default Camposes