/**
 *
 * InfoCompStepTwo
 *
 */

import React, { useEffect, useState } from "react";
import moment from 'moment';
import { connect } from "react-redux";
import { compose } from "redux";
import { Form } from 'antd';
import { createStructuredSelector } from "reselect";
import './InfoCompStepTwo.css';
import TodayIcon from '@material-ui/icons/Today';
import fine from './suppotFine.png';


// import PropTypes from 'prop-types';
// import styled from 'styled-components';



function InfoCompStepTwo() {


  return (
            <div className="container">
            <div className="step2Form row">
              <div className="col-md-6">
                 <div className="steak_one"> 
                 <span>
                    Veuillez préciser la solution finetech Utilisée ou une offre que vous souhaiter utilisé<br/>
                 </span>
                 </div>
                   
                   <div>
                    <input type="checkbox" className="steak"/> <label className="steak_inscription">Solutions , Matériels Réseaux Télécom</label><br/>
                    <input type="checkbox" className="steak"/> <label className="steak_inscription"for="">Audits & Conseil</label><br/>
                    <input type="checkbox" className="steak"/> <label className="steak_inscription" for="">Core Banking</label><br/>
                    <input type="checkbox" className="steak"/> <label className="steak_inscription" for="">Business Solutions</label><br/>
                    <input type="checkbox" className="steak"/> <label className="steak_inscription" for="">Formation , Sminaires Consulting</label><br/>

                    </div>

                    <div className="steak_two"> 
                      <span style={{fontFamily:'Montserrat',fontSize:"19px"}}>Type de support choisi<br/></span>
                    </div> 
                  <div className="checkbox-box">

                      <input type="checkbox" className="steak"/> <label className="steak_inscription" for="">Premium</label><br/>
                      <input type="checkbox" className="steak"/> <label className="steak_inscription" for="">Classique</label><br/>
                      <input type="checkbox" className="steak"/> <label className="steak_inscription" for="">Custom Solution</label><br/>

                  </div>
                  <div>
                  <span style={{fontFamily:'Montserrat',fontSize:"19px"}}
                  >
                    Avez-vous des besoins spécifiques que nous devons prendre en compte
                  </span><br/>
                    <textarea className="textarea-one">

                    </textarea>
                  </div>
                  

              </div>
              
              <div className="imgCol-6 col-md-6">
                
              </div>
              </div>
            </div>
            
        );
}


InfoCompStepTwo.propTypes = {};

export default InfoCompStepTwo;

