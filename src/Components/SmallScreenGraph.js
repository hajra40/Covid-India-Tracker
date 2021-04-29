import { Card , CardContent , Typography } from '@material-ui/core'
import React from 'react'

const SmallScreenGraph = ({ date, cases , decrease , recovered , day , firstDose , secondDose }) => {
    return (
        <>
            <br />
            <Typography color="textSecondary" gutterBottom>
                 <h5>Please visit the same website on Desktop to view the graph</h5>
            </Typography>
            <br />
            <Card className="card" variant="outlined">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {day}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        Cases : {cases}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        Decrease in Cases : {decrease}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        Recovered : {recovered}
                    </Typography>
                </CardContent>
            </Card>
            <br />
            <Card className="card" variant="outlined">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {date}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        Total First Dose Administered: {firstDose}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        Total Second Dose Administered: {secondDose}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default SmallScreenGraph
