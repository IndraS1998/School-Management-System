import React,{useState} from 'react';
import {AiOutlineMenu,AiOutlineSearch,AiOutlineBell,AiOutlineLogout} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {HiOutlineMail} from 'react-icons/hi'

const DisplayNav = ({user,onLogOut}) => {
    let {first_name,img,imageSet} = user
    let [searchOpen,setSearchOpen] = useState(false)
    return (
        <div className='display_nav-section space__between'>
            <div>
                <AiOutlineMenu className='display_nav-icons ml-4' size='25'/>
                {!searchOpen && <AiOutlineSearch className='display_nav-icons ml-4' 
                                    size='25' onClick={()=>setSearchOpen(true)}/>}
                {searchOpen && <input className='input ml-4' />}
            </div>
            <div className='center'>
                <AiOutlineBell className='display_nav-icons mr-4' size='25'/>
                <HiOutlineMail className='display_nav-icons mr-4' size='25'/>
                <div className='center ml-3'>
                {imageSet?
                    <img src={img} className='img-link' alt='ooppss!'/>:
                    <CgProfile size='30' />}
                <p className='dashboard-txt ml-2 mr-3'>{first_name}</p>
                </div>
                <AiOutlineLogout size='25' className='display_nav-icons-red mr-5' onClick={onLogOut}/>
            </div>
        </div>
    );
}

export default DisplayNav;
