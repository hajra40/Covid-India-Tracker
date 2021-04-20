import React from 'react'
import {Card , CardContent , Typography} from '@material-ui/core'

const NotFound = () => {
    return (
        <div className="not__found">
              <Card className="card" variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            404 Error
                        </Typography>
                        <Typography variant="h2" color="textSecondary" gutterBottom>
                            OOPS !! No Corona Found.
                        </Typography>
                        
                    </CardContent>
                </Card>
        </div>
    )
}

export default NotFound
