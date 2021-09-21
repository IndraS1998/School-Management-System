import React from 'react'
import {useToasts} from 'react-toast-notifications'

const ToastInfo = ({content,txt,style}) => {
    const {addToast} = useToasts()
    return (
        <div className={style} onClick={()=> addToast(content,{
            appearance : 'info',
            autoDismiss : true,
        })}>
            {txt}
        </div>
    );
}

export default ToastInfo;
