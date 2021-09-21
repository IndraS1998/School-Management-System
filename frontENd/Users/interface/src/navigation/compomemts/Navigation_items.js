import React from 'react'
import {Link} from 'react-router-dom'


let Navigation_items = () =>{
    return(
        <div className="center">
            <Link style={{textDecoration:'none'}} to='/'>
                <p className='nav_headers'>home</p>
            </Link>
            <Link to='/about'style={{textDecoration : 'none'}}>
                <p className='nav_headers ml-3'>about</p>
            </Link>
            <Link style={{textDecoration : 'none'}} to='/register'>
                <p className='nav_headers ml-3'>procedures</p>
            </Link>
            <Link style={{textDecoration : 'none'}} to='/dashboard'>
                <p className='nav_headers ml-3'>my account</p>
            </Link>
            <Link style={{textDecoration : 'none'}} to='/'>
                <p className='nav_headers ml-3'>localization</p>
            </Link>
        </div>
    )
}

export default Navigation_items