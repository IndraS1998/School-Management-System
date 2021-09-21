import React,{useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import {ToastProvider} from 'react-toast-notifications'

//      $$$     ROUTE IMPORTS     $$$
import Register from './students/register/Register'
import Home from './students/home/Home'
import Navigation from './navigation/Navigation'
import Dashboard from './students/dashboard/Dashboard'
import About from './students/about/About'
import SchoolInfo from './students/school_info/SchoolInfo'
import Footer from './navigation/footer/Footer'
import {context} from './state/reducer'
import Modal from './modals/Modal'
import './App.css'

function App(){
    let reducer = useContext(context)
    return(
        <ToastProvider autoDismiss autoDismissTimeout={5000}
            placement="top-right">
            {!reducer.logged && <Navigation />}
            {reducer.isModalOpen && <Modal />}
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/register" component={Register}/>
                <Route path='/about' component={About}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/info' component={SchoolInfo}/>
            </Switch>
            <Footer />
        </ToastProvider>
    )
}

export default App