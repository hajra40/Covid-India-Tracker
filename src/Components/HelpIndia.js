import React from 'react'
import help from './fight.png'

const HelpIndia = () => {
    return (
        <div className="help">
            <img src={help} alt="helpIndia" className="img"/>
            <div className="help__container">
                <h1>Let's Help India Breathe</h1>
                <h4><a href="https://milaap.org/#:~:text=Free%20Crowdfunding%20for%20India&text=%231%20Fundraising%20website%20in%20India,Milaap">Donate Now</a></h4>
            </div>
        </div>
    )
}

export default HelpIndia
