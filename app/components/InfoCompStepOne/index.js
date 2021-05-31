/**
 *
 * InfoCompStepOne
 *
 */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { Form, Input } from 'antd';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import HttpsRoundedIcon from '@material-ui/icons/HttpsRounded';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import './InfoCompStepOne.css';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';




function InfoCompStepOne() {

 
  return (
            <div className="step1">
              <div className="step1TxtIcone">
                <HttpsRoundedIcon style={{fontSize:'15px'}} /> <span style={{fontSize:'11px'}}>Certains champs sont déjà renseignés mais non éditables</span>
              </div>
              <div className="container">
              
              <div className="row">
                <div className="col-md-6">
                  <div style={{display:'flex', flexDirection:'row'}}>
                    <label className="step1LabelInput mr-auto">Prénom <span style={{color:'red'}}>*</span></label>
                    <HttpsRoundedIcon style={{fontSize:'15px', color:'#a6a6a6'}} />
                  </div>
                  <Form.Item>
                  <Input
                      disabled
                    
                      style={{height:'50px', border:'none',width:"500px",backgroundColor:"#1f3d83",opacity:"0.40"}}
                  >
                  </Input>
                  
                  </Form.Item>
                  <div style={{display:'flex', flexDirection:'row'}}>
                    <label className="step1LabelInput mr-auto">Numéro de téléphone<span style={{color:'red'}}>*</span></label>
                    <HttpsRoundedIcon style={{fontSize:'15px', color:'#a6a6a6'}} />
                  </div>
                  <Form.Item>
                    <Input
                      disabled
                      
                      style={{height:'50px', border:'none',width:"500px",backgroundColor:"#1f3d83",opacity:"0.40"}}
                    >
                    </Input>
                  </Form.Item>

                  <div style={{display:'flex', flexDirection:'row'}}>
                    <label className="step1LabelInput mr-auto">Entreprise<span style={{color:'red'}}>*</span></label>
                    <HttpsRoundedIcon style={{fontSize:'15px', color:'#a6a6a6'}} />
                  </div>
                  <Form.Item>
                    <Input
                      disabled
                      
                      style={{height:'50px', border:'none',width:"500px",backgroundColor:"#1f3d83",opacity:"0.40"}}
                    >
                    </Input>
                  </Form.Item>

                  <div style={{display:'flex', flexDirection:'row'}}>
                    <label className="step1LabelInput mr-auto">Adresse<span style={{color:'red'}}>*</span></label>
                    <HttpsRoundedIcon style={{fontSize:'15px', color:'#a6a6a6'}} />
                  </div>
                  <Form.Item>
                    <Input
                      disabled
                      
                      style={{height:'50px', border:'none',width:"500px",backgroundColor:"#1f3d83",opacity:"0.40"}}
                    >
                    </Input>
                  </Form.Item>


                </div>
                <div className="col-md-6">
                  <div style={{display:'flex', flexDirection:'row'}}>
                    <label className="step1LabelInput mr-auto">Nom <span style={{color:'red'}}>*</span></label>
                    <HttpsRoundedIcon style={{fontSize:'15px', color:'#a6a6a6'}} />
                  </div>
                  <Form.Item>
                    <Input
                      disabled
                      
                      style={{height:'50px', border:'none',width:"500px",backgroundColor:"#1f3d83",opacity:"0.40"}}
                    >
                    </Input>
                  </Form.Item>
                  <div style={{display:'flex', flexDirection:'row'}}>
                    <label className="step1LabelInput mr-auto">Email <span style={{color:'red'}}>*</span></label>
                    <HttpsRoundedIcon style={{fontSize:'15px', color:'#a6a6a6'}} />
                  </div>
                  <Form.Item>
                    <Input
                      disabled
                      
                      style={{height:'50px', border:'none',width:"500px",backgroundColor:"#1f3d83",opacity:"0.40"}}
                    >
                    </Input>
                  </Form.Item>

                  <div style={{display:'flex', flexDirection:'row'}}>
                    <label className="step1LabelInput mr-auto">Pays<span style={{color:'red'}}>*</span></label>
                    <HttpsRoundedIcon style={{fontSize:'15px', color:'#a6a6a6'}} />
                  </div>
                  <Form.Item>
                    <Input
                      disabled
                      
                      style={{height:'50px', border:'none',width:"500px",backgroundColor:"#1f3d83",opacity:"0.40"}}
                    >
                    </Input>
                  </Form.Item>

                  <div style={{display:'flex', flexDirection:'row'}}>
                    <label className="step1LabelInput mr-auto">Site internet<span style={{color:'red'}}>*</span></label>
                    <HttpsRoundedIcon style={{fontSize:'15px', color:'#a6a6a6'}} />
                  </div>
                  <Form.Item>
                    <Input
                      disabled
                      
                      style={{height:'50px', border:'none',width:"500px",backgroundColor:"#1f3d83",opacity:"0.40"}}
                    >
                    </Input>
                  </Form.Item>
                
                </div>
                </div>
                </div>
                
            </div>
          );
}


InfoCompStepOne.propTypes = {};

export default InfoCompStepOne;

