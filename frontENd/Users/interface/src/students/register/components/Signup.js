import React,{useState,useEffect,forwardRef} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


import './Register.css'
import {onSetString} from '../../../state/components/functions'

const genders = ['male','female']

const Signup = ({onToggleAuth,onSignUp}) => {

    let [fn,setFn] = useState('')
    let [ln,setLn] = useState('')
    let [em,setEm] = useState('')
    let [num,setNum] = useState('')
    let [pw,setPw] = useState('')
    let [sex,setSex] = useState(genders[0])
    let [dob,setDob] = useState(new Date())
    let [confPw,setConfPw] = useState('')
    let [errM,setErrM] = useState('please ensure that all inputs are effectively filled')
    let [valid,setValid] = useState(false)
    let [err,setErr] = useState(false) 
    
    const DateInput = forwardRef(({ value, onClick }, ref) => (
        <button className="campos_btn" onClick={onClick} ref={ref}>
          {value}
        </button>
    ));



    /*          ###                 FUNCTIONS                    ### */
    function checkFilled(){
        if(fn.length > 4 && ln.length> 4 && em.length > 4 && em.includes('@') &&
             num.length > 4 && pw.length > 4 && confPw === pw && em.includes('@')){
            setValid(true)
            setErr(false)
        }else{
            setValid(false)
            setErr(true)
        }
    }

    function onClearInput(){
        setFn('');setLn('');setNum('');setPw('');setConfPw('')
    }

    useEffect(() => checkFilled(), [fn,ln,em,num,pw,confPw]);

 
    return (
        <section className='main_section col'>
            <section className='col'>
                <p className='info-txt-header'>register now</p>
                <section className='register-section col'>
                    <div className='register-section-container'>
                        <input type='text' value={fn} onChange={e => onSetString(e,setFn)}
                            placeholder='first name' className='mt-5 regitration_input'/>
                        <input type='text' value={ln} onChange={e => onSetString(e,setLn)}
                             placeholder='last name' className='mt-5 regitration_input'/>
                    </div>
                    <div className='register-section-container'>
                        <input type='text' value={num} onChange={e => onSetString(e,setNum)} 
                            placeholder='phone number' className='mt-5 regitration_input'/>
                        <input type='text' value={em} onChange={e => onSetString(e,setEm)} 
                            placeholder='email address' className=' mt-5 regitration_input'/>
                    </div>
                    <div className='register-section-container'>
                        <input type='password' value={pw} onChange={e => onSetString(e,setPw)} 
                            placeholder='password' className='mt-5 regitration_input'/>
                        <input type='password' value={confPw} onChange={e => onSetString(e,setConfPw)} 
                            placeholder='confirm-password' className='mt-5 regitration_input'/>
                    </div>
                    <div className='register-section-container'>
                        <div className='mt-5'>
                            <select className='select_edit' onChange={e=>onSetString(e,setSex)}>
                                {genders.map((gender,index)=>(
                                    <option value={gender} key={index}>{gender}</option>
                                ))}
                            </select>
                        </div>
                        <div className='ml-3 clickable mt-5 mr-4'>
                            <DatePicker selected={dob} onSelect={date => setDob(date)}
                                 customInput={<DateInput />} dateFormat="MMMM d, yyyy"
                                    showMonthDropdown showYearDropdown dropdownMode="select" onChange={date => setDob(date)}/>
                        </div>
                    </div>
                    {valid
                        ?<p className='btn_blue mt-5' onClick={()=>{
                            let resErr = onSignUp(fn,ln,num,em,pw,dob,sex)
                            if(resErr){
                                setErrM('account already created with email')
                                setErr(true)
                            }else{
                                onClearInput()
                            }
                            }}>
                                Register Now</p>
                        :<p className='btn_red mt-5'>Register Now</p>}
                    {err && <div className='error-txt mt-3'>{errM}</div>}
                </section>
                <p className='toogle-txt mt-3' onClick={onToggleAuth}>Log In instead?</p>
            </section>
        </section>
    );
}

export default Signup;
