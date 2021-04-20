import React, { useEffect, useState } from 'react'
import { Card , CardContent , Typography} from '@material-ui/core'
import CurrCard from './CurrCard'

const CurrentStatus = () => {
    const [total , setTotal] = useState('')
    const [totaldeaths , setTotalDeaths] = useState('')
    const [totalconfirmed, setTotalCon] = useState('')

    useEffect(() => {
        const getCurrentStatus = async () => {
            await fetch('https://api.rootnet.in/covid19-in/stats/latest')
            .then(data=> data.json())
            .then(res => {
                console.log(res.data.summary)
                setTotal(res.data.summary.total)
                setTotalDeaths(res.data.summary.deaths)
                setTotalCon(res.data.summary.discharged)
            })
            .catch(err => alert(err))
        }

        getCurrentStatus();
    })
    return (
        <div className="main_card">
            <CurrCard title="Total Cases" value={total} className="dark"/>
            <CurrCard title="Active Cases" value={total-(totalconfirmed + totaldeaths)} className="dark"/>
            <CurrCard title="Discharged" value={totalconfirmed} className="green" />
            <CurrCard title="Deaths" value={totaldeaths} borderColor="error.main" />
        </div>
    )
}

export default CurrentStatus
