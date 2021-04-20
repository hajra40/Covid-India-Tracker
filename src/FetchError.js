import React from 'react'
import {Card , CardContent , Typography} from '@material-ui/core'

const FetchError = () => {
    return (
        <div className="not__found">
              <Card className="card" variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Sorry! Not Able To Fetch Data , Please Try Later.
                        </Typography>
                        
                    </CardContent>
                </Card>
        </div>
    )
}

export default FetchError
