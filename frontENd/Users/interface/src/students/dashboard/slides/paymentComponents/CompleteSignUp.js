import React,{useState,useRef,useEffect} from 'react'

import {onSetString} from '../../../../state/components/functions'

let programs = ['HND','BTS','Degree','masters']

const CompleteSignUp = ({reducer}) => {

    //data

    const {departments,specialities,onSetStudentDetails} = reducer

    const [dep,setDeps] = useState({...departments[0]})
    const [specialty,setSpecialty] = useState({...specialities[0]})
    const [program,setProgram] = useState(programs[0])
    const [number,setNumber] = useState('')
    const [selectedFile,setSelectedFile] = useState(null)
    const imgInput = useRef(null)
    const [allValid,setAllValid] = useState(false)
    const [fileSelectionError,setFileSelectionError] = useState(false)



    //methods
    const fileSelectionHandler = e =>setSelectedFile(e.target.files[0])

    function checkAllValid(){
        if(selectedFile && number.length==9 && selectedFile?.size < 102400){
            setAllValid(true)
            setFileSelectionError(false)
        }else if(selectedFile?.size >= 102400){
            setFileSelectionError(true)
            setAllValid(false)
        }
        else{
            setAllValid(false)
        }
    }

    useEffect(checkAllValid, [selectedFile,number])

    return (
        <section className='col'>
            <section className='info_section mt-5 signup_partTwo'>
                <h2 className='payment_header mt-5'>continue signup</h2>
                <div className='col mt-5'>
                    <p className='mainHeader-2'>academic requirements</p>
                    <p className='info_body mt-2'>complete submission request here</p>    
                </div>
                <div className='space__around info_elt'>
                    <div className='first_div'><p className='info_head'>department</p></div>
                    <div className='info_body clickable second_div center'>
                        <select className='select_edit' onChange={e=>onSetString(e,setDeps)}>
                            {departments.map((d,index) =>(
                                <option value={d} key={index}>{d.name}</option>))}
                        </select>
                    </div>
                </div>
                <div className='space__around info_elt'>
                    <div className='first_div'><p className='info_head'>speciality</p></div>
                    <div className='info_body clickable second_div center'>
                        <select className='select_edit' onChange={e=>onSetString(e,setSpecialty)}>
                            {specialities.map((s,index)=>(
                                <option value={s} key={index}>{s.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='space__around info_elt'>
                    <div className='first_div'><p className='info_head'>program</p></div>
                    <div className='info_body second_div center clickable'>
                        <select className='select_edit' onChange={e=>onSetString(e,setProgram)}>
                            {programs.map((p,index)=>(
                                <option value={p} key={index}>{p}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='space__around info_elt'>
                    <div className='first_div'><p className='info_head'>file</p></div>
                    <div className='center second_div'>
                        <input style={{display:'none'}} type='file' ref={imgInput} onChange={e=>fileSelectionHandler(e)}/>           
                        <p className='edit_btn center' onClick={()=>imgInput.current.click()}>
                            {selectedFile? 'File selected':'Select file'}
                        </p>
                        <p className='error-txt ml-3'>{fileSelectionError?'file too large':''}</p>
                    </div>
                </div>
                <div className='space__around info_elt'>
                    <div className='first_div'><p className='info_head'>transaction number</p></div>
                    <div className='second_div center'>
                        <input className='payment_input' onChange={e=>onSetString(e,setNumber)} value={number} />
                    </div>
                </div>
                <div className='center mt-5'>
                {allValid?
                    <p className='btn_blue center capitalize' onClick={()=>{
                            console.log('details set')
                            onSetStudentDetails(dep,specialty,program,number,selectedFile)
                        }}>Upload</p>
                        :<p className='btn_red center' >Upload</p>
                            }
                </div>
            </section>
        </section>
    );
}

export default CompleteSignUp;
