import React from 'react'
import { Tabs , Tab } from 'react-bootstrap'
import ContactsHelplines from './Components/ContactsHelplines'
import CurrentStatus from './Components/CurrentStatus'
import Graph from './Components/Graph'
import Guidlines from './Components/Guidlines'
import Header from './Components/Header'
import HospitalsBeds from './Components/HospitalsBeds'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './App.css'
import { Link } from 'react-router-dom'
import { Chip } from '@material-ui/core'

const India = () => {
    return (
        <div>
            <Header />
            <div className="india__app">
                
                <h3>Current Status</h3>
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
