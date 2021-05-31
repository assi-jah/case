/**
 *
 * InfoComplementaire
 *
 */

 import React, { useEffect, useState } from "react";
 import { connect } from "react-redux";
 import { compose } from "redux";
 import { createStructuredSelector } from "reselect";
 import { Form } from 'antd';
 import './InfoComplementaire.css';
 // import PropTypes from 'prop-types';
 // import styled from 'styled-components';
 import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
 import { blue, green } from '@material-ui/core/colors';
 import Stepper from '@material-ui/core/Stepper';
 import Step from '@material-ui/core/Step';
 import Button from '@material-ui/core/Button';
 import { IconButton, StepLabel } from "@material-ui/core";
 import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
 import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
 import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
 import InfoCompStepOne from '../../components/InfoCompStepOne';
 import InfoCompStepTwo from '../../components/InfoCompStepTwo';
 import InfoCompStepThree from '../../components/InfoCompStepThree';
 
 
 const muiTheme = createMuiTheme({
     overrides: {
         MuiStepIcon: {
             root: {
                 color: '#707070', // or 'rgba(0, 0, 0, 1)'
                 '&$active': {
                     color: '#1f3d83',
                 },
                 '&$completed': {
                     color: '#43ad3d',
                 },
             },
         },
     }
 });
 
 const theme = createMuiTheme({
     palette: {
       primary: blue,
     },
   });
 
 
 function getSteps() {
   return [
       <span style={{fontFamily:'Montserrat', fontSize:'14px'}}>Information de compte</span> ,
       <span style={{fontFamily:'Montserrat', fontSize:'14px'}}>Spécifité et Niveau de support</span> ,
       <span style={{fontFamily:'Montserrat', fontSize:'14px'}}>Validation inscription</span>
     ];
 }
 
 
 function InfoComplementaire({}) {
 
     
     const [infoGenerale, setInfoGenerale] = useState({})
     const [infoAdministrative, setInfoAdministrative] = useState({})
     const [infoResponsable, setInfoResponsable] = useState({})
     const [button, setButton] = useState(false)
 
     const data = {
         ...infoGenerale,
         ...infoAdministrative,
         ...infoResponsable,
     }
 
     console.log(data)
 
     const handleSubmit = () => {
        
     }
 
 
     const handleChangeInfoGenerale = (value) => {
         setInfoGenerale(value)
     }
 
     const handleChangeInfoAdministrative = (value) => {
         setInfoAdministrative(value)
     }
 
     const handleChangeInfoResponsable = (value) => {
         setInfoResponsable(value)
     }
 
     const [activeStep, setActiveStep] = useState(0);
     const [completed, setCompleted] = useState({});
     const steps = getSteps();
 
   const totalSteps = () => {
     return steps.length;
   };
 
   const isLastStep = () => {
     return activeStep === totalSteps() - 1;
   };
 
   const allStepsCompleted = () => {
     return isLastStep();
   };
 
 
   const handleNext = () => {
     const newActiveStep =
       isLastStep() && !allStepsCompleted()
         ? // It's the last step, but not all steps have been completed,
           // find the first step that has been completed
           steps.findIndex((step, i) => !(i in completed))
         : activeStep + 1;
     setActiveStep(newActiveStep);
   };
 
   const handleBack = () => {
     setActiveStep((prevActiveStep) => prevActiveStep - 1);
   };
 
   const handleStep = (step) => () => {
     setActiveStep(step);
   };
 
   return (
     <Form  className="stepper">
         <div className="titleStepper">
             <span style={{fontSize:'20px', marginTop:'6px'}}>Saisir les informations complémentaires</span>  
             <ThemeProvider theme={muiTheme}>
                 <Stepper alternativeLabel nonLinear activeStep={activeStep}>
                 {steps.map((label, index) => {
                     return (
                     <Step key={index}>
                         <StepLabel
                         onClick={handleStep(index)}
                         style={{cursor:'pointer'}}
                         >
                         {label}
                         </StepLabel>
                     </Step>
                     );
                 })}
                 </Stepper>
             </ThemeProvider>
         </div>
         <div className="stepContent">
             <div style={{marginBottom:'auto',width:'100%'}}>
               {activeStep === 0 && <InfoCompStepOne value={infoGenerale} handleChange={handleChangeInfoGenerale} />}
               {activeStep === 1 && <InfoCompStepTwo value={infoAdministrative} handleChange={handleChangeInfoAdministrative} />}
               {activeStep === 2 && <InfoCompStepThree value={infoResponsable} handleChange={handleChangeInfoResponsable} />}
             </div>
             <div style={{display:'flex', flexDirection:'column', marginBottom:'6px', justifyContent:'center', alignItems:'center'}} >
                 {activeStep===3 &&
                     <ThemeProvider theme={theme}>
                         <Button
                             onClick={handleSubmit}
                             size="medium"
                             style={{marginBottom:'20px'}}
                             disabled={button}
                             type="primary"
                             variant="contained"
                             color="primary"
                         >
                             <span style={{textTransform:'none',fontFamily:'Montserrat',color:'white'}}><DescriptionOutlinedIcon />Soumettre le formulaire</span>
                         </Button>
                     </ThemeProvider>
                 }
                 <div style={{display:'flex', flexDirection:'row'}}>
                     <div>
                         { (activeStep===1 || activeStep===2 || activeStep===3 ) ? (
                         <IconButton
                             style={{ backgroundColor:'#1f3d83', boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'}}
                             disabled={activeStep === 0}
                             onClick={handleBack}
                         >
                         <ArrowBackIosRoundedIcon style={{color:'white', fontSize:'20px'}} />
                         </IconButton>
                         ) : (
                             <span style={{ cursor: 'not-allowed' }}>
                                 <IconButton
                                 style={{ backgroundColor:'#d3d3d3', boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'}}
                                 disabled={activeStep === 0}
                                 >
                                 <ArrowBackIosRoundedIcon style={{color:'#1f3d83', fontSize:'20px'}} />
                                 </IconButton>
                             </span>
                         )}
                         <span style={{marginLeft:'10px'}}>Précédent</span>
                     </div>
                     <div>
                         <span style={{marginRight:'10px',marginLeft:'20px'}} >Suivant</span>
                         { (activeStep===0 || activeStep===1 || activeStep===2) ? (
                             <IconButton
                             onClick={handleNext}
                             style={{ backgroundColor:'#1f3d83',boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'}}
                             >
                             <ArrowForwardIosRoundedIcon style={{color:'white', fontSize:'20px'}} />
                             </IconButton>
                         ) : (
                             <span style={{ cursor: 'not-allowed' }}>
                                 <IconButton
                                     style={{ backgroundColor:'#1f3d83',boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'}}
                                     disabled={activeStep === 3}
                                 >
                                 <ArrowForwardIosRoundedIcon style={{color:'#1f3d83', fontSize:'20px'}} />
                                 </IconButton>
                             </span>
                         )}
                     </div>
                 </div>
             </div>
         </div>
   </Form>
         );
 }
 
 InfoComplementaire.propTypes = {};
 
 const mapStateToProps = createStructuredSelector({
   
 });
 
 function mapDispatchToProps(dispatch) {
   return {
     
   };
 }
 
 const withConnect = connect(mapStateToProps, mapDispatchToProps);
 
 export default compose(withConnect)(InfoComplementaire);
 
 