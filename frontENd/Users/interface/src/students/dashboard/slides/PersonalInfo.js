import React,{useState,useEffect,useRef} from 'react'
import {CgProfile} from 'react-icons/cg'

import {onSetString} from '../../../state/components/functions'
/*
    todo
        *change profile photo
*/
const PersonalInfo = ({reducer}) => {
    const {first_name,last_name,imageSet,Department,DOB,
        specialty,Sex,img,program,matricule,contact,email} = reducer.loggedStudent
    
        console.log(DOB.toLocaleString())

    let [pw,setPw] = useState('')
    let [prevPw,setPrevPw] = useState('')
    let [confPw,setConfPw] = useState('')
    let [isPasswordsFilled,setIsPasswordsFilled] = useState(false)
    let [message,setMessage] = useState('')
    let [imgPicked,setImgPicked] = useState(false)
    let [isMessageFilled,setIsMessageFilled] = useState(false)
    const [selectedFile,setSelectedFile] = useState(null)
    const imgInput = useRef(null)


    //medthods
    let days = DOB.toLocaleString().split(',')

    //          ###         DEALING WITH EDITING PASSWORD           ###

    const checkPasswordsFilled = () =>{
        if(prevPw.length >= 5 && pw.length >= 5 && confPw === pw){
            setIsPasswordsFilled(true)
        }else{
            setIsPasswordsFilled(false)
        }
    }

    function onEditPw(){

    }
    useEffect(checkPasswordsFilled, [pw,prevPw,confPw]);



    //          ####            DEALING WITH IMAGE UPLOAD           ###


    const fileSelectionHandler = (e) =>{
        setSelectedFile(e.target.files[0])
    }

    const fileUploader = () =>{
        const fd = new FormData
        fd.append('img',selectedFile,selectedFile.name)
        //edit the fuck
    }

    const checkImg = () =>{
        if(selectedFile){
            setImgPicked(true)
        }else{
            setImgPicked(false)
        }
    }
    useEffect(checkImg, [selectedFile]);

    
    //          ###         SENDING MESSAGE         ###


    const checkMessageFIlled = () =>{
        if(message.length > 5){
            setIsMessageFilled(true)
        }else{
            setIsMessageFilled(false)
        }
    }

    function onSendMessage(){
        //send the message here
    }

    useEffect(checkMessageFIlled,[message])
    

    return (
        <section className='mt-5 col'>
            <div><h3 className='mainHeader'>personal info</h3></div>
            <div><h5 className='secondary_header mt-3'>basic information about your account</h5></div>
            {!imageSet && <p className='mt-5 notice-red'>*please set your profile image</p>}
            <section className='info_section'>
                <div>
                    <p className='mainHeader-2'>basic info</p>
                    <p className='info_body mt-2'>your personal info 
                    is strictky confidential</p>    
                </div>
                <div className='space__around info_elt'>
                    <div className='first_div'>
                        <p className='info_head'>picture</p>
                    </div>
                    <div className='second_div'>
                        {imageSet?
                        <img src={img} className='img-link' alt='ooppss!'/>:
                        <div className='center'>
                            <input style={{display:'none'}} type='file' ref={imgInput} onChange={e=>fileSelectionHandler(e)}/>           
                            <p className='edit_btn center ml-5' onClick={()=>imgInput.current.click()}>select image</p>
                            {imgPicked?
                                <p className='edit_btn center ml-5' onClick={e=>fileUploader(e)}>upload</p>
                                :<p className='edit_btn-err center ml-5' >upload</p>
                            }
                        </div>
                        }
                    </div>
                    {/*img?<img src={img} className='img-link' alt='ooppss!'/>:*/}
                </div>
                <div className='space__around info_elt'>
                    <div className='first_div'>
                        <p className='info_head'>Student Name</p>
                    </div>
                    <div className='second_div'>
                        <p className='info_body'>{first_name + ' ' + last_name}</p>
                    </div>
                </div>
                <div className='space__around info_elt'>
                    <div className='first_div'>
                        <p className='info_head'>birth day</p>
                    </div>
                    <div className='second_div'>
                        <p className='info_body'>{days[0]}</p>
                    </div>
                </div>
                <div className='space__around info_elt'>
                    <div className='first_div'>
                        <p className='info_head'>gender</p>
                    </div>
                    <div className='second_div'>
                        <p className='info_body'>{Sex}</p>
                    </div>
                </div>
                <div className='col info_elt'>
                    <div className='info_head mb-4'>edit password</div>
                    <div className='space__around mb-3 edit_password_container'>
                        <input className='regitration_input' onChange={e=>onSetString(e,setPrevPw)} placeholder='enter previous password' 
                                type='password' value={prevPw} />
                        <input className='regitration_input' onChange={e=>onSetString(e,setPw)} placeholder='new password' 
                                type='password' value={pw} />
                        <input className='regitration_input' onChange={e=>onSetString(e,setConfPw)} placeholder='confirm new password' 
                                type='password' value={confPw} />
                        </div>
                    <div className='mr-5'>
                        {isPasswordsFilled?<p className='btn_blue center ml-5' onClick={onEditPw}>edit password</p>
                            :<p className='btn_red center ml-5' dissabled='true'>edit password</p>}
                    </div>
                </div>
            </section>
            <section className='info_section mt-5'> 
                <div>
                    <p className='mainHeader-2'>academic info</p>
                    <p className='info_body mt-2'>information about your academic profile at kEBHIPS</p>    
                </div>
                <div className='space__around info_elt'>
                    <div className='first_div'>
                        <p className='info_head'>matricule</p>
                    </div>
                    <div className='second_div'>
                        <p className='info_body'>{matricule}</p>
                    </div>
                </div>
                <div className='space__around info_elt'>
                    <div className='first_div'>
                        <p className='info_head'>department</p>
                    </div>
                    <div className='second_div'>
                        <p className='info_body'>{Department}</p>
                    </div>
                </div>
                <div className='space__around info_elt'>
                    <div className='first_div'>
                        <p className='info_head'>speciality</p>
                    </div>
                    <div className='second_div'>
                        <p className='info_body'>{specialty}</p>
                    </div>
                </div>
                
                <div className='space__around info_elt'>
                    <div className='first_div'>
                        <p className='info_head'>program</p>
                    </div>
                    <div className='second_div'>
                        <p className='info_body'>{program}</p>
                    </div>
                </div>
            </section>
            <section className='info_section mt-5'>
                <div>
                    <p className='mainHeader-2'>contact info</p>
                    <p className='info_body mt-2'>easily notify the administration about any difficulties</p>    
                </div>
                <div className='space__around info_elt'>
                    <div className='first_div'>
                        <p className='info_head'>contact</p>
                    </div>
                    <div className='second_div'>
                        <p className='info_body'>{contact}</p>
                    </div>
                </div>
                <div className='space__around info_elt'>
                    <div className='first_div'>
                        <p className='info_head'>email</p>
                    </div>
                    <div className='second_div'>
                            <p >{email}</p>
                    </div>
                </div>
                <div className='space__around info_elt'>
                    <div className='first_div'>
                        <p className='info_head'>message</p>
                    </div>
                    <div className='second_div'>
                        <textarea rows='4' cols='37' className='message_textarea' value={message} onChange={e=>onSetString(e,setMessage)}/>
                        {isMessageFilled?
                                <p className='edit_btn center ml-5' onClick={onSendMessage}>send</p>
                                :<p className='edit_btn-err center ml-5' >send</p>
                            }
                    </div>
                </div>

            </section>
        </section>
    );
}

export default PersonalInfo;
