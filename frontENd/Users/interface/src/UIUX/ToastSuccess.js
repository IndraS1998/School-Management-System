import React from 'react'
import {useToasts} from 'react-toast-notifications'


const ToastSuccess = ({content,txt}) => {
    const {addToast} = useToasts()
    // other appearances are error, warning , info
    return (
        <div className='btn_blue capitalize' onClick={()=> addToast(content,{
            appearance : 'success',
            autoDismiss : true,
        })}>
            {txt}
        </div>
    );
}

export default ToastSuccess