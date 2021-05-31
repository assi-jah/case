/**
 *
 * PageCompteTechnicien
 *
 */

 import React from 'react';
 import PropTypes from 'prop-types';
 import { connect } from 'react-redux';
 import { Helmet } from 'react-helmet';
 import { createStructuredSelector } from 'reselect';
 import { compose } from 'redux';
 import Footer from '../../components/Footer';
 import imgtechnicien from "../../images/technicien.jpg";
 import { Row, Col } from 'react-bootstrap';
 import { useInjectSaga } from 'utils/injectSaga';
 import { useInjectReducer } from 'utils/injectReducer';
 import makeSelectPageCompteTechnicien from './selectors';
 import reducer from './reducer';
 import PersonIcon from '@material-ui/icons/Person';
 import LockIcon from '@material-ui/icons/Lock';
 import saga from './saga';
 import chti from "../../images/FinetechIT.png";
 import imgcase20 from "../../images/case.png";
 import img_promo from "../../images/promo.png";
 import '../App.css';
 import { useHistory }from "react-router-dom";
 


export function PageCompteTechnicien() {
  useInjectReducer({ key: 'pageCompteTechnicien', reducer });
  useInjectSaga({ key: 'pageCompteTechnicien', saga });
let history =  useHistory();
  return (
    <div>
      <Helmet>
        <title>PageCompteTechnicien</title>
        <meta
          name="description"
          content="Description of PageCompteTechnicien"
        />
      </Helmet>

      <Row>
      <Col className="col-md-5 teckni">
      <img  className="techTI" src ={chti} alt =""/>
      </Col>
       
      <Col className="col-md-7 formTech">
           
      <div className="ouvtech">
         <div>
           
         </div>
         <div className="retac">
         <PersonIcon/> <span style={{fontFamily:"Montserrat"}}
         onClick ={
           () =>{
             history.push("./ouverturecompteTechnicien"); 
           }
         }
         >Ouverture de compte</span>
         </div>
       </div>
      <img  className="img_case_tech" src ={imgcase20} alt =""/>
     

      <form>
      <div className="input_compttechn">
        <div>
         <label className="labtech">
           Identifiant ou adresse e-mail
         </label><br/>
           <span className="icones">
             <PersonIcon/>
           </span>
           <input className="inputtech_"  type="text" name="" /><br/>
         </div>
        
         <div>
         
         <label className="labtech">
           Code d'identifiant
         </label><br/>

         <span className="icones">
            <img  className="icone_promo" src ={img_promo} alt =""/>  
         </span>
          <input className="inputtech_" type="text" name="" /><br/>
         </div>
        
         
         <label className="labtech">
           Mot de passe
         </label><br/>
         <span className="icones">
             <LockIcon/>
         </span>
         <input className="inputtech_"  type="password" name="" /><br/><br/>
         <span style={{color:"#009fe3",marginBottom:"30px",fontFamily:"Montserrat",cursor:"pointer"}}
         onClick = {
          () => {
            history.push("./motDePerduTech")
          }
         }>
           Mot de passe oublié ? Contactez l'administrateur
         </span><br/>
         <input className="submittech_"   type="submit" value="Se connecter" />
      </div>
      </form>
      <div style={{marginTop:"95px",marginLeft:"340px"}}>
        <Footer/>
      </div>
      </Col>
      </Row>
    
    </div>
  );
}

PageCompteTechnicien.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pageCompteTechnicien: makeSelectPageCompteTechnicien(),
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
  withConnect
  
)(PageCompteTechnicien);
