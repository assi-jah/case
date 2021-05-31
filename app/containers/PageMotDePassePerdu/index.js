/**
 *
 * PageMotDePassePerdu
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Header from '../../components/Header';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPageMotDePassePerdu from './selectors';
import reducer from './reducer';
import saga from './saga';
import Footer from '../../components/Footer';
import motperd from "../../images/SFO.png";
export function PageMotDePassePerdu() {
  useInjectReducer({ key: 'pageMotDePassePerdu', reducer });
  useInjectSaga({ key: 'pageMotDePassePerdu', saga });

  return (
    <div>
      <Helmet>
        <title>PageMotDePassePerdu</title>
        <meta name="description" content="Description of PageMotDePassePerdu" />
      </Helmet>


      <Header/>
      <div className="container-fluid ">
             <div className="row">
             <div className="col-sm-6 ">
             <h2 className="motdepasseperdu_titre">recuperer votre mot de passe perdu</h2>
                <div className="mdpperdu_">
                    <label style={{paddingBottom:"1px",fontFamily:"Montserrat"}}> 
                      Veuillez préciser le code de société<br/>
                      <input className="entreprise_" type="text" name="entreprise"/><br/>
                    </label><br/>
                   
                    <label style={{paddingBottom:"1px",fontFamily:"Montserrat"}}>
                      Veuillez préciser votre adresse e-mail<br/>
                      <input className="mail_" type="mail" name="entreprise"/><br/>
                    </label><br/>

                    <p style={{paddingBottom:"1px",fontFamily:"Montserrat"}}>Veuillez spécifier votre type de compte<br/></p>
                    <label style={{paddingBottom:"1px",fontFamily:"Montserrat"}}>

                      <input type="checkbox" className="steak"/> <label 
                      style={{paddingBottom:"1px",fontFamily:"Montserrat"}} >
                        Affiliée
                        </label><br/>
                      <input type="checkbox" className="steak"/> 
                      <label
                       style={{paddingBottom:"1px",fontFamily:"Montserrat"}} >
                         Gestionnaire
                         </label>

                    </label><br/>
                    
                    <input className="renouveller" type="submit" value="Renouveller"/><br/>
                    </div>
                    </div>
                   <div className="col-sm-6">
                   <img  className="sfo-img" src ={motperd} alt =""/>

                   
    
              
             </div> 
             </div> 
          </div>
          <div style={{marginTop:"120px"}}>
               <span style={{opacity:"0.66",fontSize:"15px",marginLeft:"50px"}}>CASE  2020-2021 | GROUPE FINETECH tous les droits réservés</span>
           </div>
    </div>
  );
}

PageMotDePassePerdu.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pageMotDePassePerdu: makeSelectPageMotDePassePerdu(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PageMotDePassePerdu);
