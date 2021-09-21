import React from 'react';

const Dashboard_home = ({departments}) => {
    return (
        <section>
            <section className='center mt-5'>
                <div className='informative_dashboard'>
                    <p className='heading-dashboard mt-1 ml-2'>{departments[0].name}</p>
                    <div className='space__between head-above'>
                        <p className='info-dashboard'>schools</p>
                        <div className='number_info-section-green center mr-5'>
                            <p className='number_info-green'>6</p>
                        </div>
                    </div>
                </div>
                <div className='informative_dashboard'>
                    <p className='heading-dashboard mt-1 ml-2'>{departments[1].name}</p>
                    <div className='space__between head-above'>
                        <p className='info-dashboard'>schools</p>
                        <div className='number_info-section-green center mr-5'>
                            <p className='number_info-green'>12</p>
                        </div>
                    </div>
                </div>
                <div className='informative_dashboard'>
                    <p className='heading-dashboard mt-1 ml-2'>{departments[2].name}</p>
                    <div className='space__between head-above'>
                        <p className='info-dashboard'>schools</p>
                        <div className='number_info-section-blue center mr-5'>
                            <p className='number_info-blue'>7</p>
                        </div>
                    </div>
                </div>
                <div className='informative_dashboard'>
                    <p className='heading-dashboard mt-1 ml-2'>{departments[3].name}</p>
                    <div className='space__between head-above'>
                        <p className='info-dashboard'>schools</p>
                        <div className='number_info-section center mr-5'>
                            <p className='number_info'>8</p>
                        </div>
                    </div>
                </div>
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

export default Dashboard_home;
