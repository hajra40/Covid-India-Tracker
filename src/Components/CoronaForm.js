import React from 'react'
import CoronaChecker from './CoronaChecker'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Link} from 'react-router-dom'

const CoronaForm = () => {
    return (
        <div>
            <h4 style={{margin: '1rem'}}><Link to="/"><ArrowForwardIosIcon /> Return Home </Link></h4>
            <CoronaChecker />
        </div>
    )
}

export default CoronaForm
