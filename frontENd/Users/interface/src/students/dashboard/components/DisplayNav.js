import React,{useState} from 'react';
import {AiOutlineMenu,AiOutlineSearch,AiOutlineBell,AiOutlineLogout} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {HiOutlineMail} from 'react-icons/hi'
import {MdClose} from 'react-icons/md'

const DisplayNav = ({user,onLogOut,onOpenModal}) => {
    let {first_name,img,imageSet} = user
    let [searchOpen,setSearchOpen] = useState(false)

    return (
        <div className='display_nav-section '>
            <div className='center'>
                <AiOutlineMenu  className='display_nav-icons-menu ml-4 ' 
                    onClick={() => onOpenModal('dashboard')} size='25'/>
                <HiOutlineMail className='display_nav-icons ml-4' size='25'/>
                {searchOpen ? 
                    <div>
                        <input className='input ml-4 search' />
                        <MdClose className='display_nav-icons pt-1' size='25' onClick={()=>setSearchOpen(false)}/>         
                    </div> :
                    <AiOutlineSearch className='display_nav-icons ml-4 search' 
                    size='25' onClick={()=>setSearchOpen(true)}/>}
            </div>
            <div className='center '>
                <AiOutlineBell className='display_nav-icons mr-4 ' size='25'/>
                <div className='center ml-3'>
                {imageSet?
                    <img src={img} className='img-link' alt='ooppss!'/>:
                    <CgProfile size='30' />}
                <p className='dashboard-txt ml-2 mr-3'>{first_name}</p>
                </div>
                <AiOutlineLogout size='25' className='display_nav-icons-red ' onClick={onLogOut}/>
            </div>
        </div>
    );
}

export default DisplayNav;
