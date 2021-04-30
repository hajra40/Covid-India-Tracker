import React , {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '2rem'
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

let stage1 = 0 , stage2 = 0;
let msg = 'No need to worry, but take care';
function getSteps() {
  return ['Start', 'Analyse', 'Result & Tips'];
}

export default function VerticalLinearStepper() {

    const updateOne = () => {
        stage1 = stage1 + 1;
        console.log(stage1, stage2)
    }
    
    const updateTwo = () => {
        stage2 = stage2 + 1;
        console.log(stage1, stage2)
    }

    

    useEffect(() => {
      if(stage2 > 0) {
        msg = 'Please isolate yourselves and immediately try to contact doctors and consult them'
      }

    }, [stage2])
    

    function getStepContent(step) {
        switch (step) {
          case 0:
              return <h3>Whatever be the result , <strong>Don't Panic </strong>. Let's Start :) !!</h3>;
          case 1:
            return (
                <div>
                    <h2>Choose the symptoms</h2>
                    <Button style={{ margin: '1rem' }} onClick={updateOne} variant="contained" color="primary">Cough</Button>
                    <Button style={{ margin: '1rem' }} onClick={updateOne} variant="contained" color="primary">Fever , Runny Nose</Button>
                    <Button style={{ margin: '1rem' }} onClick={updateOne} variant="contained" color="primary">Body aches</Button>
                    <Button style={{ margin: '1rem' }} onClick={updateOne} variant="contained" color="primary">Headache</Button>
                    <Button style={{ margin: '1rem' }} onClick={updateOne} variant="contained" color="primary">Sore throat</Button>
                    <Button style={{ margin: '1rem' }} onClick={updateOne} variant="contained" color="primary">Loss of smell or taste</Button>
                    <Button style={{ margin: '1rem' }} onClick={updateOne} variant="contained" color="primary">Nausea</Button>
                    <Button style={{ margin: '1rem' }} onClick={updateOne} variant="contained" color="primary">Trouble breathing</Button>
                    <Button style={{ margin: '1rem' }} onClick={updateOne} variant="contained" color="primary">Fatigue</Button>
                    <Button style={{ margin: '1rem' }} onClick={updateOne} variant="contained" color="primary">Chills, sometimes with shaking</Button>
                    <Button style={{ margin: '1rem' }} onClick={updateOne} variant="contained" color="primary">Diarrhea</Button>
                    <Button style={{ margin: '1rem' }} onClick={updateTwo} variant="contained" color="primary">Shortness of breath</Button>
                    <Button style={{ margin: '1rem' }} onClick={updateTwo} variant="contained" color="primary">Trouble breathing or shortness of breath</Button>
                    <Button style={{ margin: '1rem' }} onClick={updateTwo} variant="contained" color="primary">Ongoing chest pain or pressure</Button>
                    <Button style={{ margin: '1rem' }} onClick={updateTwo} variant="contained" color="primary">New confusion</Button>
                    <Button style={{ margin: '1rem' }} onClick={updateTwo} variant="contained" color="primary">Can’t wake up fully</Button>
                    <Button style={{ margin: '1rem' }} onClick={updateTwo} variant="contained" color="primary">Bluish lips or face</Button>
                </div>
            );
          case 2:
            return(
              <div>
               {
                 stage2 ? (
                   <div>
                     <h4 style={{margin: '0.7rem'}}>Kindly, isolate yourself at home if beds are not available and immediately consult a doctor.</h4>
                     <h4 className="twitter_card"><strong><a href="https://covid19-twitter.in/">Twitter Search | Covid Supply Finder</a></strong></h4>
                     <h4><a href="https://www.mohfw.gov.in/covid_vaccination/vaccination/index.html">Register for vaccination</a></h4>
                   </div>
                 ) : (
                    <div>
                      <h4 style={{margin: '0.7rem'}}>Nothing much to worry , but keep following the precautions and quarantine yourself. Take good & healthy food</h4>
                      <h4 className="twitter_card"><strong><a href="https://covid19-twitter.in/">Twitter Search | Covid Supply Finder</a></strong></h4>
                     <h4><a href="https://www.mohfw.gov.in/covid_vaccination/vaccination/index.html">Register for vaccination</a></h4>  
                    </div>
                 )
               }
              </div>
            );
          default:
            return 'Unknown step'; 
        }
      }
      

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root} style={{minHeight: '74vh', margin: '2rem'}}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
            <h4 style={{margin: '1rem'}}><Link to="/helpwebsites"><ArrowForwardIosIcon /> Return Back </Link></h4>
        </Paper>
      )}
    </div>
  );
}
