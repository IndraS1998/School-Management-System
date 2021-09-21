import React from 'react';

import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
    return (
        <section className='footer-section col'>
            <div className='flex__start-start-col header-section'>
                <h2 >
                    kelden bilingual institute of higher education
                </h2>
            </div>
            <section className='secondary__section'>
                <h4 >biyemassi laic</h4>
                <h4>campus B</h4>
                <h4>tel: +237-666-666-666</h4>
                <h4>Email: KP@yahoomail.com</h4>
            </section>
            <section className='third-section '>
                <div className='media-section'>
                    <div className='media border-right'>
                        <AiOutlineFacebook />
                    </div>
                    <div className='media border-right'>
                        <AiOutlineInstagram />
                    </div>
                    <div className='media'>
                        <AiOutlineLinkedin />
                    </div>
                </div>
                <div className='col link-section'>
                    <article>
                        <h2>Quicklinks</h2>
                    </article>
                    <section className='space__between connection-area'>
                        <div>
                            <div className='links'>mConnect</div>
                            <div className='links'>mConnect</div>
                            <div className='links'>mConnect</div>
                        </div>
                        <div>
                            <div className='links'>mConnect</div>
                            <div className='links'>mConnect</div>
                            <div className='links'>mConnect</div>
                        </div>
                        <div>
                            <div className='links'>mConnect</div>
                            <div className='links'>mConnect</div>
                            <div className='links'>mConnect</div>
                        </div>
                    </section>
                </div>
            </section>
            <p className='mt-5'>Keldon Bilingual Institute of professional Studies @2021, 
                <span className='uppercase ml-2'>minsup</span>
                <span className='uppercase ml-3'>minfopra</span>
                <span className='uppercase ml-3'>minrex</span>
            </p>
        </section>
    );
}

export default Footer;
