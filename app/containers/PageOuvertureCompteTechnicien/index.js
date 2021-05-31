/**
 *
 * PageOuvertureCompteTechnicien
 * 
 *
 */
 import React from 'react';
 import PropTypes from 'prop-types';
 import { connect } from 'react-redux';
 import { createStructuredSelector } from 'reselect';
 import { compose } from 'redux';
 import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
 import { useInjectSaga } from 'utils/injectSaga';
 import { useInjectReducer } from 'utils/injectReducer';
 import makeSelectPageOuvertureCompteTechnicien from './selectors';
 import reducer from './reducer';
 import saga from './saga';
 import imgcompteinter from "../../images/Imginterins.jpg";
 import imgcase20 from "../../images/case.png";
 import PersonIcon from '@material-ui/icons/Person';
 import EmailIcon from '@material-ui/icons/Email';
 import InfoIcon from '@material-ui/icons/Info';
 import Footer from '../../components/Footer';
 import '../App.css';
 import { useHistory }from "react-router-dom";
 
export function PageOuvertureCompteTechnicien() {
  useInjectReducer({ key: 'pageOuvertureCompteTechnicien', reducer });
  useInjectSaga({ key: 'pageOuvertureCompteTechnicien', saga });
let history = useHistory();

  return (
    <div>
      

      <div className="row">
     <div className="col-md-6 ">
     <img  className="overture_compt_img" src ={imgcompteinter} alt =""/>
     </div>
     <div className="col-md-6">
       <div className="ouvtech">
         <div>
           
         </div>
         <div className="retac">
          <KeyboardBackspaceIcon /> <span 
          onClick={
            () =>{
              history.push("/accueil");
            }
          }> Retour à l'accueil</span>
         </div>
       </div>
       <img  className="imgCase_" src ={imgcase20} alt =""/><br/>
       <span className="span_octh">Ouverture de votre compte technicien Helpdesk</span>
       <form className="form_over_tech">

         <div className="inputIcon">
         <label className="labtech">
           Veuillez spécifier votre nom
         </label><br/>
         <span className="icones">
          <PersonIcon/> 
         </span>
         <input className="inputtech_"  type="text" name="" /><br/>
         </div>
        
         <div className="inputIcon">
         <label className="labtech">
           Veuillez spécifier votre adresse e-mail
         </label><br/>
         <span className="icones">
           <EmailIcon/>
         </span>
         
          <input className="inputtech_" type="text" name="" /><br/>
         </div>
        
         <div className="inputIcon">
         <label className="labtech">
           Veuillez spécifier votre fonction
         </label><br/>
         <span className="icones">
           <InfoIcon/>
         </span>
         <input className="inputtech_"  type="text" name="" /><br/>
         </div>
        
         
         <input className="submit_tech_"   type="submit" value="Demande d'ouverture compte" /><br/>
       </form>
       <div className="footer_ouv_tech">
       <Footer/>
       </div>
       </div>
    </div>
    </div>
  );
}

PageOuvertureCompteTechnicien.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pageOuvertureCompteTechnicien: makeSelectPageOuvertureCompteTechnicien(),
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

export default compose(withConnect)(PageOuvertureCompteTechnicien);

