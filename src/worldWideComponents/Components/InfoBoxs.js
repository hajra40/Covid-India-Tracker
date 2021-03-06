import { Card ,CardContent, Typography } from '@material-ui/core'
import React from 'react'
import '../css/App.css'

const InfoBoxs = ({ title , cases , total }) => {
    console.log(cases)
    return (
        <Card className="card">
            <CardContent>
                <Typography className="infobox__title" color={'textSecondary'}>
                    {title}
                </Typography>
                <h2 className="infobox__cases">{cases}</h2>
                <Typography className="infobox__total" color={'textSecondary'}>
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBoxs
