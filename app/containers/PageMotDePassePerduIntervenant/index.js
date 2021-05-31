/**
 *
 * PageMotDePassePerduIntervenant
 *
 */

 import React from 'react';
 import PropTypes from 'prop-types';
 import { connect } from 'react-redux';
 import { Helmet } from 'react-helmet';
 import { createStructuredSelector } from 'reselect';
 import { compose } from 'redux';
 import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
 import imgperdutech from "../../images/img_tech_perdu.jpg";
 import { useInjectSaga } from 'utils/injectSaga';
 import { useInjectReducer } from 'utils/injectReducer';
 import makeSelectPageMotDePassePerduIntervenant from './selectors';
 import reducer from './reducer';
 import imgcase20 from "../../images/case.png";
 import PersonIcon from '@material-ui/icons/Person';
 import saga from './saga';
 import Footer from '../../components/Footer';
 import img_promo from "../../images/promo.png";
 import '../App.css';
 import { useHistory} from "react-router-dom";
export function PageMotDePassePerduIntervenant() {
  useInjectReducer({ key: 'pageMotDePassePerduIntervenant', reducer });
  useInjectSaga({ key: 'pageMotDePassePerduIntervenant', saga });

  let history = useHistory();
  return (
    <div>
     

        
     <div className="row">
       <div className="col-md-7 ">
        <img  className="img_mpptech" src ={imgperdutech} alt =""/>
    
      </div>
      <div className="col-md-5">

      <div className="ouvtech">
         <div>
           
         </div>
         <div className="retac">
         <KeyboardBackspaceIcon /> <span
         onClick = {
           () =>{
             history.push("./accueil");
           }
         }
         >
           Retour à l'accueil
           </span>
         </div>
       </div>
       <div>
          <img  className="img_case_technicien" src ={imgcase20} alt =""/><br/>
          <span style={{fontSize:"20px",marginLeft:"50px",fontFamily:"'Montserrat'", fontWeight: "700"}}
          >
            Procédure de récupération de votre mot de passe
          </span>
       </div>
       <div style={{marginLeft:"50px",marginTop:"30px"}}>
       <form> 
        <label 
          style={{paddingBottom:"1px",fontFamily:"Montserrat"}}>
          Veuillez entrer votre adresse e-mail
        </label><br/>
        
         <span className="icones">
          <PersonIcon/>
         </span>
         <input className="inputtech_" type="text"/><br/>
        
        <label style={{paddingBottom:"1px",fontFamily:"Montserrat"}}>
          Code d'identifiant
        </label><br/>
        <span className="icones">
            <img  className="icone_promo" src ={img_promo} alt =""/>  
         </span>
        <input className="inputtech_" type="text"/><br/>
        <input className="button_drmp" type="submit" value="Demande de récupération"/>
      </form>

       </div>
   
      <div style={{marginLeft:"50px",marginTop:"30px",fontFamily:"'Montserrat'"}}><br/>
      
        <PersonIcon/>
      
        <span>Pas de compte Demande d'ouverture de compte</span> 
      </div>
      <div style={{marginTop:"20px",marginLeft:"50px"}} > 
      < Footer/>
      </div>
     
      </div>
    </div>
    </div>
  );
}

PageMotDePassePerduIntervenant.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pageMotDePassePerduIntervenant: makeSelectPageMotDePassePerduIntervenant(),
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
)(PageMotDePassePerduIntervenant);
