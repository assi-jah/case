/**
 *
 * InscriptionPhaseDeux
 *
 */
 

 import React from 'react';
 import dhh from "../../images/ledh.png";
 import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
 import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
 // import PropTypes from 'prop-types';
 // import styled from 'styled-components';
 
 function InscriptionPhaseDeux() {
 
   return(
 
     <div>
           <div className="container phasIns_2">
                <div className="row ">
                   <div className=" col-sm-8">
                   <form>
                    <p className="checkbox-paragraphe"> Veuillez préciser la solution finetech Utilisée ou une offre que vous souhaiter utilisé<br/></p>
                    
                    <label>
                     <input type="checkbox" className="steak"/> <label className="steak_inscription">Solutions , Matériels Réseaux Télécom</label><br/>
                     <input type="checkbox" className="steak"/> <label className="steak_inscription"for="">Audits & Conseil</label><br/>
                     <input type="checkbox" className="steak"/> <label className="steak_inscription" for="">Core Banking</label><br/>
                     <input type="checkbox" className="steak"/> <label className="steak_inscription" for="">Business Solutions</label><br/>
                     <input type="checkbox" className="steak"/> <label className="steak_inscription" for="">Formation , Sminaires Consulting</label><br/>
 
                     </label>
 
                     
                     <p className="checkbox-paragraphe">Type de support choisi<br/></p>
                   <label>
                       <input type="checkbox" className="steak"/> <label className="steak_inscription" for="">Premium</label><br/>
                       <input type="checkbox" className="steak"/> <label className="steak_inscription" for="">Classique</label><br/>
                       <input type="checkbox" className="steak"/> <label className="steak_inscription" for="">Custom Solution</label><br/>
 
                   </label>
                     <p className="checkbox-paragraphe">Avez-vous des besoins spécifiques que nous devons prendre en compte </p>
                     <div className="row">
                       
                       <textarea className="textarea-message" id="ameliorer"></textarea>
                       
                     </div>
                     </form>
                   </div>
                   
                   <div className="col-sm-4">
                   
                   <img className="dh-img_"src={dhh}/>
                         <div className="container">
                          <div className="row">
                          <span className="troisieme-etape_validation"><ArrowBackIosIcon/></span>
                          <span className="troisieme-etape_retour"><ArrowForwardIosIcon/></span>
                         </div>
                         
                   </div>  
 
                </div>
              </div>
              </div>
     </div>
   )
 
 }
 
 InscriptionPhaseDeux.propTypes = {};
 
 export default InscriptionPhaseDeux;
 