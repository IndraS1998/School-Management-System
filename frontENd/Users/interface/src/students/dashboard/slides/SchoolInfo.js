import React from 'react'
/*
        -announcement
		-school contact
*/
const d = new Date
let month
let day

switch (d.getMonth()) {
    case 0:
        month = 'January'
        break;
    case 1:
        month = 'Febraury'
        break;
    case 2:
        month = 'March'
        break;
    case 3:
        month = 'April'
        break;
    case 4:
        month = 'May'
        break;
    case 5:
        month = 'June'
        break;
    case 6:
        month = 'July'
        break;
    case 7:
        month = 'August'
        break;
    case 8:
        month = 'September'
        break;
    case 9:
        month = 'October'
        break;
    case 10:
        month = 'November'
        break;
    case 11:
        month = 'December'
        break;
    default:
        break;
}

switch (d.getDay()) {
    case 1:
        day = 'monday'
        break;
    case 2:
        day = 'Tuesday'
        break;
    case 3:
        day = 'wednesday'
        break;
    case 4:
        day = 'thursday'
        break;
    case 5:
        day = 'friday'
        break;
    case 6:
        day = 'saturday'
        break;
    case 7:
        day = 'sunday'
        break;
    default:
        break;
}
var today = day+ ' '+d.getDate() + ' '+ month+ ',' + ' '+ d.getHours() +':' + d.getMinutes()


const SchoolInfo = ({reducer}) => {
    const {departments,Specialties,lecturers} = reducer
    return (
        <div >
            <h3 className='news_header ml-5 mt-5'>School news and announcements</h3>
            <h5 className='news_secondary'>{today}{d.getHours() > 12?' PM':' AM'}</h5>
            <section className='news_section col'>
               <p>
               Sea sanctus invidunt duo dolor dolor dolor clita at sadipscing ea. Vero sed lorem et diam.
                Et kasd diam ea aliquyam dolor eos et est. Consetetur nonumy sadipscing et est, diam sea stet
                 ipsum magna accusam erat no ipsum ipsum. Et consetetur tempor justo dolor lorem at diam, sit
                  voluptua takimata no est diam ipsum rebum vero.
                Duo eirmod vero ipsum eirmod sanctus sanctus tempor.   
                </p> 
            </section>
        </div>
    );
}

export default SchoolInfo;
