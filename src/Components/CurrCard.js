import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'

const CurrCard = ({ title , value }) => {
    return (
        <>
            <Card className="card" variant="outlined">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {value}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default CurrCard
