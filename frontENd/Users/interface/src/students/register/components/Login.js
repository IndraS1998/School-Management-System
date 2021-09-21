import React,{useState,useEffect} from 'react'
import {onSetString} from '../../../state/components/functions'

const Login = ({onToggleAuth,onLogin}) => {


    const [em,setEm] = useState('')
    const [pw,setPw] = useState('')
    const [m,setM] = useState('')
    const [allFilled,setAllFilled] = useState(false)

    let [err,setErr] = useState(false) 

    function checkFilled(){
        if(em.length >4 && pw.length>4 && em.includes('@')){
            setAllFilled(true)
            setErr(false)
        }else{
            setAllFilled(false)
            setM('please fill all inputs')
            setErr(true)
        }
    }


    useEffect(() => checkFilled(), [em,pw]);

    return (
        <section className='main_section col'>
            <section className='col'>
                <p className='info-txt-header'>register now</p>
                <section className='register-section col'>
                    <div className='register-section-container'>
                        <input type='text' value={em} onChange={e => onSetString(e,setEm)} placeholder='email address' className='mt-5 regitration_input'/>
                        <input type='password' value={pw} onChange={e => onSetString(e,setPw)} placeholder='password' className='mt-5 ml-3 regitration_input'/>
                    </div>
                    {allFilled
                        ?<p className='btn_blue mt-5' onClick={()=>{
                            let resErr = onLogin(em,pw)
                            if(resErr){
                                console.log(resErr)
                                setM('in-correct email or password')
                                setErr(true)
                            }
                            }}>
                                Register Now</p>
                        :<p className='btn_red mt-5'>Register Now</p>}
                    {err? <div className='error-txt mt-3'>{m}</div>:<div></div>}
                </section>
                <p className='toogle-txt mt-3' onClick={onToggleAuth}>Sign Up instead?</p>
            </section>
        </section>
    );
}

export default Login;
