/**
 *
 * InscriptionPhaseTrois
 *
 */

 import React from 'react';
 import ledh from "../../images/ledh.png";
 

 import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
 import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
 
 // import PropTypes from 'prop-types';
 // import styled from 'styled-components';
 
 function InscriptionPhaseTrois() {
   return (
     <div>
        
        <div className="container">
              
 
                 
              <div className="row formulaire_inscription">
              <div className="col-sm-8">
                  
                      <p className="paragraphe-validation">Les présentes conditions générales sont applicables à CASE et l'ensemble <br/>
                         de ses services associés.<br/>
                         Elles sont des applicables dans leur intégralité pour tout contrat passé 
                         de livraison entre CASE et ses clients finaux au Sénégal ou à l'étranger,quel que
                         soit sle lieu  Toutes conditions contraire aux présentes conditions générales posée par 
                         le client, dans ses conditions générales ou dans tout autre document, sera inopposable 
                         à CASE quel que soit le moment ou aura pu etre portée sont applicables à sa connaissance.Sans accord
                         exprés et préalable de CASE ,nous n'admettrons aucune dérogation aux présentes
                         conditions générales de vente. CASE se réserve le droit de procéder à tout 
                         moment à des modifications des présentes conditions générales de ventes
                       </p>
                       <input type="checkbox" className="steak"/> <label for="">J'accepte les conditions d'utilisation de la plateforme</label>
                  </div>
                  
             <div className="col-sm-4">
                  
               <img className="dh-img"src={ledh}/>
               <div className="valide">
                  
                          <button className="val_ins">Validation Inscription</button><br/>
                          <button className="troisieme-etape_validation"><ArrowBackIosIcon/></button> 
                           <span style={{color:"#1f3d83",marginTop:"22px",fontSize:"18px",fontFamily:"'Montserrat'",marginLeft:'4px'}}>Précédant </span>
                           <span style={{color:"#1f3d83",marginTop:"22px",fontSize:"18px",marginLeft:"20px",fontFamily:"'Montserrat'",marginLeft:'30px'}}>Retour</span>
                           <button className="troisieme-etape_retour" > <ArrowForwardIosIcon/></button>
                         
                </div>   
             
 
              </div>
           </div>
          </div>
     </div>
   )
 }
 
 InscriptionPhaseTrois.propTypes = {};
 
 export default InscriptionPhaseTrois;
 