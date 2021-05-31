/**
 *
 * AccountTechnicien
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import imgFine from "../../images/finetech-dh.png";
import imgcase20 from "../../images/case.png";
import HomeIcon from '@material-ui/icons/Home';
import { Form, Input } from 'antd';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAccountTechnicien from './selectors';
import reducer from './reducer';
import saga from './saga';
import { useHistory }from "react-router-dom";


export function AccountTechnicien() {
  useInjectReducer({ key: 'accountTechnicien', reducer });
  useInjectSaga({ key: 'accountTechnicien', saga });
  let history =  useHistory();


  return (
    <div>
      <Helmet>
        <title>AccountTechnicien</title>
        <meta name="description" content="Description of AccountTechnicien" />
      </Helmet>

      <div className="container-fluid">
      <div className="row">

      <div className="img-tech_ col-md-7 d-flex justify-content-center align-items-center flex-column">

      
      <div style={{color:"white",fontSize:'40px',fontFamily:'Montserrat'}}>
      <span> Dynamisme, rigueur et dicipline</span>
      </div>
      <img style={{width:"600px",height:"200px"}} src={imgFine}alt=""/>
      

      </div>
     
      <div className="col-md-5 ">
      <div className="">
      <HomeIcon/><Button style={{fontSize:'10px',fontFamily:'Montserrat',fontWeight:"800",border:"none"}} variant="outlined" >Accueil</Button>
      
    
      </div>

      <div className="d-flex justify-content-center align-items-center flex-column">

      <div>
        <img style={{width:"380px",height:"200px"}} src={imgcase20} alt=""/>
      </div>
      <span style={{color:"#1f3d83",fontSize:'30px',fontFamily:'Montserrat',marginTop:"5px",marginBottom:'20px',fontWeight:"600"}}>
         CONNEXION
      </span>
      
    
       <form>
       
       
     
            <div style={{ flexDirection:'row'}}>
            <label className="labelTech mr-auto">Identifiant ou adresse e-mail<span style={{color:'red'}}>*</span></label>
            </div>
            <Form.Item label="">
              <Input style={{border:"none",height:"40px",width:'300px',backgroundColor:"none",borderRadius:"8px"}}/>
            </Form.Item>

            
            <div style={{ flexDirection:'row'}}>
            <label className="labelTech mr-auto">Code d'identifiant<span style={{color:'red'}}>*</span></label>
            </div>
            <Form.Item label="">
              <Input style={{border:"none",height:"40px",width:'300px',backgroundColor:"none",borderRadius:"8px"}}/>
            </Form.Item>

                      
            <div style={{flexDirection:'row'}}>
            <label className="labelTech mr-auto">Mot de passe<span style={{color:'red'}}>*</span></label>
            </div>
            <Form.Item >
              <Input.Password />
            </Form.Item>

            

            <Button style={{height:"40px",color:"white",marginLeft:"50px",backgroundColor:'#1f3d83',width:'200px',marginTop:'30px',borderRadius:'20px',fontWeight:"600"}} variant="outlined" color="#1f3d83">
               Se connecter
            </Button><br/>
            <Button style={{height:"40px",color:"#1f3d83",marginTop:'30px',border:"none",fontFamily:'Montserrat'}} variant="outlined" color="#1f3d83">
               Mot de passe oublié ?<br/> Contactez l'administrateur
            </Button><br/>

            <Button style={{border:'none',fontFamily:'Montserrat',fontSize:"10px",fontWeight:"600",marginTop:"20px"}} variant="outlined" color="#1f3d83"
            onClick = {
             () => {
            history.push("./inscrir")
             }
             }>
              <PersonIcon/> Créer compte

            </Button>


        
       </form>

      </div>
     
      </div>
      
      </div>
      </div>

    </div>
  );
}

AccountTechnicien.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  accountTechnicien: makeSelectAccountTechnicien(),
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
)(AccountTechnicien);
