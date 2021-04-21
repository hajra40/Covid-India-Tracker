import React from 'react'
import { Tabs , Tab } from 'react-bootstrap'
import ContactsHelplines from './Components/ContactsHelplines'
import CurrentStatus from './Components/CurrentStatus'
import Statewise_updates from './Components/Statewise_updates'
import Graph from './Components/Graph'
import Guidlines from './Components/Guidlines'
import Header from './Components/Header'
import HospitalsBeds from './Components/HospitalsBeds'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './App.css'
import { Link } from 'react-router-dom'

const India = () => {
    return (
        <div>           
            <Header />
            <div className="india__app">
                
                <h3>Live Updates of Covid-19</h3>
                <CurrentStatus />
                <Link to="/world">Check out Worldwide Data <ArrowForwardIosIcon /> </Link>
                <div className="tabs">
                    <Tabs defaultActiveKey="hospitals">
                            <Tab eventKey="home" title="Graph">
                                <Graph />
                            </Tab>
                            <Tab eventKey="hospitals" title="Hospitals & Beds">
                                <HospitalsBeds />
                            </Tab>
                            <Tab eventKey="Statewise_Updates" title="Statewise Updates">
                                <Statewise_updates />
                            </Tab>
                            <Tab eventKey="contact" title="Guidelines">
                                <Guidlines />
                            </Tab>
                            <Tab eventKey="helpline" title="Helplines">
                                <ContactsHelplines />
                            </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default India
