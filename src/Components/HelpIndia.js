import { Typography } from '@material-ui/core'
import React from 'react'
import help from './fight.png'

const HelpIndia = () => {
    return (
        <div className="help">
            <img src={help} alt="helpIndia" className="img"/>
            <div className="help__container">
                <h1>Let's Help India Breathe</h1>
                <Typography color="textPrimary" style={{margin: '1rem 0rem' , textAlign: 'left'}}>
                    Everyday thousand of people are losing their lives <br />due to oxygen shortage , no ventilators & beds available . <br />
                    Hospitals are completely filled with covid patients,<br /> people are dying on floor , roads , coridors.<br /> India needs you. 
                </Typography>
                <h4><a href="https://milaap.org/#:~:text=Free%20Crowdfunding%20for%20India&text=%231%20Fundraising%20website%20in%20India,Milaap">Donate</a></h4>
                <h4><a href="https://www.mohfw.gov.in/covid_vaccination/vaccination/index.html">Register for vaccination</a></h4>
            </div>
        </div>
    )
}

export default HelpIndia
