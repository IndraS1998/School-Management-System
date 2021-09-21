import React from 'react'

import CompleteSignUp from './paymentComponents/CompleteSignUp'
import TuitionManagement from './paymentComponents/TuitionManagement'

const Payments = ({reducer}) => {

    if(reducer.loggedStudent.isNew){
        return <CompleteSignUp reducer={reducer}/>
    }
    
    return <TuitionManagement reducer={reducer}/>
}

export default Payments;
