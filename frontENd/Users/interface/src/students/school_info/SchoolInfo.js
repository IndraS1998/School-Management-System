import React,{useContext} from 'react'

import InformativeDashboard from './compomemts/InformativeDashboard'
import { context } from '../../state/reducer'
import './SchoolInfo.css'

const SchoolInfo = () => {

    let reducer = useContext(context)
    let {departments} = reducer
    
    return (
        <section className='information_section-container'>
            <section className='center informative_dashboard-container'>
                {departments.map((department,index) => <InformativeDashboard dName={department.name} key={index}/>)}
            </section>
            <section className='center'>
                <section className='percentage_section'>
                    <h4 className='percentage_section-header ml-3 pt-1'>recent results</h4>
                    <section className=' percentage_container col'>
                    <div className='space__around  particular_contained'>
                        <p className='percentage_header'>hnd percentage 2021</p>
                        <p className='actual-percentage'>94%</p>
                    </div>
                    <div className='space__around particular_contained'>
                        <p className='percentage_header'>bts percentage 2021</p>
                        <p className='actual-percentage'>94%</p>
                    </div>
                    </section>
                </section>
                <section className='side_percentage'>
                    <h4 className='percentage_section-header ml-3 pt-1'>previous results</h4>
                    <section className='flex__start-start-col side-percentage-container'>
                        <div className='space__around mt-4'>
                            <p className='percentage_header-sm'>hnd percentage 2021</p>
                            <p className='actual-percentage-sm'>94%</p>
                        </div>
                        <div className='space__around mt-4'>
                            <p className='percentage_header-sm'>bts percentage 2021</p>
                            <p className='actual-percentage-sm'>94%</p>
                        </div>
                        <div className='space__around mt-4'>
                            <p className='percentage_header-sm'>hnd percentage 2021</p>
                            <p className='actual-percentage-sm'>94%</p>
                        </div>
                        <div className='space__around mt-4'>
                            <p className='percentage_header-sm'>bts percentage 2021</p>
                            <p className='actual-percentage-sm'>94%</p>
                        </div>
                        <div className='space__around mt-4'>
                            <p className='percentage_header-sm'>hnd percentage 2021</p>
                            <p className='actual-percentage-sm'>94%</p>
                        </div>
                        <div className='space__around mt-4'>
                            <p className='percentage_header-sm'>bts percentage 2021</p>
                            <p className='actual-percentage-sm'>94%</p>
                        </div>
                        <div className='space__around mt-4'>
                            <p className='percentage_header-sm'>hnd percentage 2021</p>
                            <p className='actual-percentage-sm'>94%</p>
                        </div>
                        <div className='space__around mt-4'>
                            <p className='percentage_header-sm'>bts percentage 2021</p>
                            <p className='actual-percentage-sm'>94%</p>
                        </div>
                    </section>
                </section>
            </section>
        </section>
    );
}

export default SchoolInfo;
