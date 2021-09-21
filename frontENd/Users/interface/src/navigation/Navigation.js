import React,{useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineSearch} from 'react-icons/ai'
//import image from './img/2019-01-30.jpg'

import {context} from '../state/reducer'

import './compomemts/Navigation.css'
import './compomemts/Navigation_items'
import Navigation_items from './compomemts/Navigation_items'

let Navigation = () =>{
    let [searchOpen,setSearchOpen] = useState(false)
    let onOpenSearch = () => setSearchOpen(true)
    let reducer = useContext(context)
    //let onCLoseSearch = () => setSearchOpen(false)
    
    return(
        <section className="navigation__main">
            <GiHamburgerMenu size='25' onClick={()=> reducer.onOpenModal('menu')} className='label'/>
            <section className='center'>
                <Link to='/' style={{textDecoration : 'none'}}>
                    <img src='./img/2019-01-30.jpg' className='image' alt='oops!'/>
                </Link>
                <p className='text__main'>KEBHIPS</p>
            </section>
            
            <section className='navigation__items'>
                <div className='center mb-4'>
                    <Link style={{textDecoration : 'none'}} to='/register'>
                        <div className='btn_blue uppercase'>Apply now</div>
                    </Link>
                    <Link style={{textDecoration : 'none'}} to='/info'>
                        <div className='btn_red uppercase ml-4'>info</div>
                    </Link>    
                </div>
                <div className='center'>
                    <Navigation_items/>
                    <div className='nav_headers pl-3'>
                         {searchOpen && <input className='input' type='text' placeholder='keyword here'/>}
                    </div>
                    <div className='nav_headers pl-3 pt-2'>
                        {!searchOpen && <AiOutlineSearch onClick={onOpenSearch}/>}
                    </div>
                </div> 
            </section>
        </section>
    )
}

export default Navigation