import React,{useState,useEffect} from 'react';
import {onSetString} from '../../../../state/components/functions'

const TuitionManagement = ({reducer}) => {

    //data 
    const {specialities,loggedStudent} = reducer

    const [transactionNum,setTransactionNum] = useState('')
    const [transactionAmt,setTransactionAmt] = useState('')
    const [isTransactionValid,setIsTransactionValid] = useState(false)
    
    const userSpecialty = specialities.find(s => s.name == loggedStudent.specialty)
    const userTuition = userSpecialty.tuitions[loggedStudent.year - 1]

    //methods

    function checkTransactionValid(){
        if(transactionNum.length == 9 && transactionAmt.length >=5 ){
            setIsTransactionValid(true)
        }else{
            setIsTransactionValid(false)
        }
    }

    useEffect(checkTransactionValid,[transactionAmt,transactionNum])

    const onPerformPayment = async () =>{}
    

    return (
        <section className='col fee_info-container mt-3 mb-3'>
            <h3 className='main_payment-header mb-3'>my payment's so far</h3>
            <section className='installment_section'>
                <div className='installment_head-2 pl-3'>
                    <p className='installment_header'>installment detail</p>
                </div>
                <div className='space__around pt-2'>
                    <input className='input' type='text' placeholder='transaction number' 
                        onChange={e=>onSetString(e,setTransactionNum)} value={transactionNum} />
                    <input className='input' type='text' placeholder='transaction amount' 
                        onChange={e=>onSetString(e,setTransactionAmt)} value={transactionAmt} />
                        {isTransactionValid?
                            <p className='edit_btn uppercase center' onClick={onPerformPayment}>pay</p>
                            :<p className='edit_btn-err center uppercase'>pay</p>
                        }
                </div>
            </section>
            <section className='mt-3 mb-3 installment_section'>
                <div className='installment_head pl-3'>
                    <p className='installment_header'>registration fee -{userTuition.registration[0]}</p>
                </div>
                <div className='installment_container'>
                    <div style={{
                        height:'100%',backgroundColor:'rgb(193, 248, 193)',borderRight:'#5f6b8e solid 1px' ,
                        width:`${userTuition.registration[1] / userTuition.registration[0] * 100}%`,
                    }}> 
                    {(userTuition.registration[1] === userTuition.registration[0]) && 
                            <h3 className='text_white center'>completed!</h3>}
                    </div>
                </div>
            </section>

            <section className='installment_section mt-3 mb-3'>
                <div className='installment_head pl-3'>
                    <p className='installment_header'>first installment -{userTuition.firstInstallment[0]}</p>
                </div>
                <div className='installment_container'>
                    <div style={{
                        height:'100%',backgroundColor:'rgb(193, 248, 193)',borderRight:'#5f6b8e solid 1px',
                        width:`${(userTuition.firstInstallment[1] / userTuition.firstInstallment[0]) * 100}%`,
                    }}>
                    {(userTuition.firstInstallment[1] === userTuition.firstInstallment[0]) && 
                            <h3 className='text_white center'>completed!</h3>}
                    </div>
                </div>
            </section>
            
            <section className='installment_section mt-3 mb-3'>
                <div className='installment_head pl-3'>
                    <p className='installment_header'>second installment -{userTuition.secondInstallment[0]}</p>
                </div>
                <div className='installment_container'>
                    <div style={{
                        height:'100%',backgroundColor:'rgb(193, 248, 193)',borderRight:'#5f6b8e solid 1px',
                        width:`${(userTuition.secondInstallment[1] / userTuition.secondInstallment[0]) * 100}%`,
                    }}>
                        {(userTuition.secondInstallment[1] === userTuition.secondInstallment[0]) && 
                                <h3 className='text_white center'>completed!</h3>}
                    </div>
                </div>
            </section>
            
            <section className='installment_section mt-3 mb-3'>
                <div className='installment_head pl-3'>
                    <p className='installment_header'>third installment -{userTuition.thirdInstallment[0]}</p>
                </div>
                <div className='installment_container '>
                    <div style={{
                        height:'100%',backgroundColor:'rgb(193, 248, 193)',borderRight:'#5f6b8e solid 1px',
                        width:`${(userTuition.thirdInstallment[1] / userTuition.thirdInstallment[0]) * 100}%`,
                    }}>
                        {(userTuition.thirdInstallment[1] === userTuition.thirdInstallment[0]) && 
                                <h3 className='text_white center'>completed!</h3>}
                    </div>
                </div>
            </section>

            <section className='installment_section mt-3 mb-3'>
                <div className='installment_head pl-3'>
                    <p className='installment_header'>other needs -{userTuition.others[0]}</p>
                </div>
                <div className='installment_container'>
                    <div style={{
                        height:'100%',backgroundColor:'rgb(193, 248, 193)',borderRight:'#5f6b8e solid 1px',
                        width:`${(userTuition.others[1] / userTuition.others[0]) * 100}%`,
                    }}>
                    {(userTuition.others[1] === userTuition.others[0]) && 
                            <h3 className='text_white center'>completed!</h3>}
                    </div>
                </div>
            </section>
        </section>
    );
}

export default TuitionManagement;
