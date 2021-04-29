import React from 'react'
import { Card, CardContent , Typography } from '@material-ui/core'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import {Link} from 'react-router-dom'

const helpWebsites = () => {

    return (
        <div className="mainhelp_card">
                <h4 className="twitter_card">Visit <strong><a href="https://covid19-twitter.in/">Covid19-twitter </a></strong>if any kind of help is required.</h4>

                <Card className="test_card" variant="outlined">
                    <CardContent>
                        <Typography style={{ display: 'flex' , justifyContent: 'space-between' }} color="textSecondary">
                            <h5>Find out if you're infected</h5>
                            <Link to="coronaform">
                                Take a test  <ArrowForwardIos /> 
                            </Link>
                        </Typography>
                    </CardContent>
                </Card>


            <h1>Websites</h1>

            <div className="help_card">
                <Card className="hcard" variant="outlined">
                    <CardContent style={{ display: 'flex' , justifyContent: 'space-between' }}>
                        <Typography color="textSecondary">
                            Available Beds in hyderabad
                            <VerifiedUserIcon style={{color: 'green' , margin: '0rem 0.3rem'}} />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <a href="https://covidbeds.info/hyderabad-beds/">
                                Visit <ArrowForwardIos /> 
                            </a>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="hcard" variant="outlined">
                    <CardContent style={{ display: 'flex' , justifyContent: 'space-between' }}>
                        <Typography color="textSecondary">
                            CovidBot Delhi 
                            <VerifiedUserIcon style={{color: 'green' , margin: '0rem 0.3rem'}} />

                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <a href="https://api.whatsapp.com/send/?=919910130828&text=covid+bot+delhi&app_absent=0">
                                Visit <ArrowForwardIos /> 
                            </a>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="hcard" variant="outlined">
                    <CardContent style={{ display: 'flex' , justifyContent: 'space-between' }}>
                        <Typography color="textSecondary">
                            Delhi Fights Corona
                            <VerifiedUserIcon style={{color: 'green' , margin: '0rem 0.3rem'}} />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <a href="https://delhifightscorona.in/testing/">
                                Visit <ArrowForwardIos /> 
                            </a>
                        </Typography>
                    </CardContent>
                </Card>


                <Card className="hcard" variant="outlined">
                    <CardContent style={{ display: 'flex' , justifyContent: 'space-between' }}>
                        <Typography color="textSecondary">
                            Verified Covid Leads 
                            <VerifiedUserIcon style={{color: 'green' , margin: '0rem 0.3rem'}} />

                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <a href="https://verifiedcovidleads.com/">
                                Visit <ArrowForwardIos /> 
                            </a>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="hcard" variant="outlined">
                    <CardContent style={{ display: 'flex' , justifyContent: 'space-between' }}>
                        <Typography color="textSecondary">
                            Covid19 Resource Finder
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <a href="https://covid19helpindia.in/">
                                Visit <ArrowForwardIos /> 
                            </a>
                        </Typography>
                    </CardContent>
                </Card>


                <Card className="hcard" variant="outlined">
                    <CardContent style={{ display: 'flex' , justifyContent: 'space-between' }}>
                        <Typography color="textSecondary">
                            Covid India - Covid Bed/Plasma/Injection Availability Portal
                            <VerifiedUserIcon style={{color: 'green' , margin: '0rem 0.3rem'}} />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <a href="https://coviddelhi.com/">
                                Visit <ArrowForwardIos /> 
                            </a>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="hcard" variant="outlined">
                    <CardContent style={{ display: 'flex' , justifyContent: 'space-between' }}>
                        <Typography color="textSecondary">
                            Covid help (Delhi)
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <a href="https://linktr.ee/180dcsggscc">
                                Visit <ArrowForwardIos /> 
                            </a>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="hcard" variant="outlined">
                    <CardContent style={{ display: 'flex' , justifyContent: 'space-between' }}>
                        <Typography color="textSecondary">
                            Covid Help
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <a href="https://linktr.ee/devinachawla">
                                Visit <ArrowForwardIos /> 
                            </a>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="hcard" variant="outlined">
                    <CardContent style={{ display: 'flex' , justifyContent: 'space-between' }}>
                        <Typography color="textSecondary">
                            Covid Help
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <a href="https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/1?id=DASHBOARD_601b9e214c7a6b689d76f493&home=1">
                                Visit <ArrowForwardIos /> 
                            </a>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="hcard" variant="outlined">
                    <CardContent style={{ display: 'flex' , justifyContent: 'space-between' }}>
                        <Typography color="textSecondary">
                            CovRelief
                            <VerifiedUserIcon style={{color: 'green' , margin: '0rem 0.3rem'}} />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <a href="https://covidrelief.glideapp.io/">
                                Visit <ArrowForwardIos /> 
                            </a>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="hcard" variant="outlined">
                    <CardContent style={{ display: 'flex' , justifyContent: 'space-between' }}>
                        <Typography color="textSecondary">
                            Corona Resources
                            <VerifiedUserIcon style={{color: 'green' , margin: '0rem 0.3rem'}} />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <a href="https://coronaresources.web.app/">
                                Visit <ArrowForwardIos /> 
                            </a>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="hcard" variant="outlined">
                    <CardContent style={{ display: 'flex' , justifyContent: 'space-between' }}>
                        <Typography color="textSecondary">
                            Covid Khoj
                            <VerifiedUserIcon style={{color: 'green' , margin: '0rem 0.3rem'}} />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <a href="https://covidkhoj.in/">
                                Visit <ArrowForwardIos /> 
                            </a>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="hcard" variant="outlined">
                    <CardContent style={{ display: 'flex' , justifyContent: 'space-between' }}>
                        <Typography color="textSecondary">
                            Covid Resources
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <a href="https://trello.com/b/6ydrkgx0/covid-resources">
                                Visit <ArrowForwardIos /> 
                            </a>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="hcard" variant="outlined">
                    <CardContent style={{ display: 'flex' , justifyContent: 'space-between' }}>
                        <Typography color="textSecondary">
                            Plasma Line
                            <VerifiedUserIcon style={{color: 'green' , margin: '0rem 0.3rem'}} />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <a href="https://plasmaline.in/">
                                Visit <ArrowForwardIos /> 
                            </a>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="hcard" variant="outlined">
                    <CardContent style={{ display: 'flex' , justifyContent: 'space-between' }}>
                        <Typography color="textSecondary">
                            India Plasma Donor
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <a href="https://indiaplasmadonor.com/">
                                Visit <ArrowForwardIos /> 
                            </a>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="hcard" variant="outlined">
                    <CardContent style={{ display: 'flex' , justifyContent: 'space-between' }}>
                        <Typography color="textSecondary">
                            Covid Ahmedabad
                            <VerifiedUserIcon style={{color: 'green' , margin: '0rem 0.3rem'}} />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <a href="http://covidahmedabad.in/">
                                Visit <ArrowForwardIos /> 
                            </a>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="hcard" variant="outlined">
                    <CardContent style={{ display: 'flex' , justifyContent: 'space-between' }}>
                        <Typography color="textSecondary">
                            Covid Help group
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <a href="https://covidhelpgroup.org/">
                                Visit <ArrowForwardIos /> 
                            </a>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="hcard" variant="outlined">
                    <CardContent style={{ display: 'flex' , justifyContent: 'space-between' }}>
                        <Typography color="textSecondary">
                            Stop Corona 
                            <VerifiedUserIcon style={{color: 'green' , margin: '0rem 0.3rem'}} />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <a href="https://stopcorona.tn.gov.in/">
                                Visit <ArrowForwardIos /> 
                            </a>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="hcard" variant="outlined">
                    <CardContent style={{ display: 'flex' , justifyContent: 'space-between' }}>
                        <Typography color="textSecondary">
                            Need Plasma 
                            <VerifiedUserIcon style={{color: 'green' , margin: '0rem 0.3rem'}} />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <a href="https://needplasma.in/">
                                Visit <ArrowForwardIos /> 
                            </a>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="hcard" variant="outlined">
                    <CardContent style={{ display: 'flex' , justifyContent: 'space-between' }}>
                        <Typography color="textSecondary">
                            Covid Fight Club
                            <VerifiedUserIcon style={{color: 'green' , margin: '0rem 0.3rem'}} />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <a href="https://covidfightclub.org/">
                                Visit <ArrowForwardIos /> 
                            </a>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="hcard" variant="outlined">
                    <CardContent style={{ display: 'flex' , justifyContent: 'space-between' }}>
                        <Typography color="textSecondary">
                            All Covid Resources
                            <VerifiedUserIcon style={{color: 'green' , margin: '0rem 0.3rem'}} />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <a href="https://thejasonsamuel.com/fightcovid">
                                Visit <ArrowForwardIos /> 
                            </a>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="hcard" variant="outlined">
                    <CardContent style={{ display: 'flex' , justifyContent: 'space-between' }}>
                        <Typography color="textSecondary">
                            Dhoondh - Plasma donation
                            <VerifiedUserIcon style={{color: 'green' , margin: '0rem 0.3rem'}} />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            <a href="https://www.dhoondh.com/">
                                Visit <ArrowForwardIos /> 
                            </a>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            
        </div>
    )
}

export default helpWebsites
