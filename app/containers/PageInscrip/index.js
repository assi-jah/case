/**
 *
 * PageInscrip
 *
 */

import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import '../App.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from '@material-ui/core/Button';
import Header from '../../components/Header';
import accImg from "../../images/accueil1.jpg";
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import makeSelectPageInscrip from './selectors';
import reducer from './reducer';

import saga from './saga';
import case2 from "../../images/case2.png";
import GooglePlusOutlined from '@ant-design/icons';
import { Form, Input } from 'antd';
import HttpsRoundedIcon from '@material-ui/icons/HttpsRounded';
import { getRegisterForm } from './actions';


export function PageInscrip({getRegisterForm}) {
  useInjectReducer({ key: 'pageInscrip', reducer });
  useInjectSaga({ key: 'pageInscrip', saga });

  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)

  const data = {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    confirmPassword,
  }

  const handleClick = () => {
    getRegisterForm(data)
  }

  const handleChangeFirstName = (e) => {
    const fN = e.target.value
    setFirstName(fN)
  }

  const handleChangeLastName = (e) => {
    const lN = e.target.value
    setLastName(lN)
  }

  const handleChangeEmail = (e) => {
    const em = e.target.value
    setEmail(em)
  }

  const handleChangePhoneNumber = (e) => {
    const pN = e.target.value
    setPhoneNumber(pN)
  }

  const handleChangePassword = (e) => {
    const pass = e.target.value
    setPassword(pass)
  }

  const handleChangeConfirmPassword = (e) => {
    const Confpass = e.target.value
    setConfirmPassword(Confpass)
  }


  return (
    <div>
      <Helmet>
        <title>PageInscrip</title>
        <meta name="description" content="Description of PageInscrip" />
      </Helmet>
      
      
      <div className="container-fluid">
      <div className="row">

      <div className="img_one_ins col-md-7">
        
        <span style={{display:"flex",justifyContent:"center",color:"white",marginTop:"300px",fontFamily:"Montserrat",fontSize:"25px",fontWeight:"600"}}>
           Bienvenue !
        </span>
        <span  style={{color:"white",fontSize:"20px",display:"flex",justifyContent:"center"}}>
          CASE: centre d'assistance et de support en ligne
        </span>

        <Button style={{height:"40px",color:"white",backgroundColor:'#1f3d83',width:'200px',marginTop:'80px',borderRadius:'20px',marginLeft:"300px",fontWeight:"500"}} variant="outlined" color="#1f3d83">
               S'identifier
        </Button>

      </div>

      <div className="col-md-5 d-flex justify-content-center align-items-center flex-column">

      
       <span style={{color:"#1f3d83",fontSize:'30px',fontFamily:'Montserrat',marginTop:"5px",marginBottom:'20px',fontWeight:"600"}}>
         Création compte
      </span>
      
    
       <form>
       
       
     
            <div style={{ flexDirection:'row'}}>
            <label className="step1LabelInput mr-auto">Prénom<span style={{color:'red'}}>*</span></label>
            </div>
            <Form.Item label="">
              <Input value={firstName} onChange={handleChangeFirstName} style={{border:"none",height:"40px",width:'300px',backgroundColor:"none",borderRadius:"8px"}}/>
            </Form.Item>

            
            <div style={{ flexDirection:'row'}}>
            <label className="step1LabelInput mr-auto">Nom<span style={{color:'red'}}>*</span></label>
            </div>
            <Form.Item label="">
              <Input value={lastName} onChange={handleChangeLastName} style={{border:"none",height:"40px",width:'300px',backgroundColor:"none",borderRadius:"8px"}}/>
            </Form.Item>

            
            <div style={{ flexDirection:'row'}}>
            <label className="step1LabelInput mr-auto">Email<span style={{color:'red'}}>*</span></label>
            </div>
            <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]}>
              <Input value={email} onChange={handleChangeEmail} style={{border:"none",height:"40px",width:'300px',backgroundColor:"none",borderRadius:"8px"}}/>
            </Form.Item>


            
            <div style={{flexDirection:'row'}}>
            <label className="step1LabelInput mr-auto">Numéro de téléphone<span style={{color:'red'}}>*</span></label>
            </div>
            <Form.Item label="">
              <Input value={phoneNumber} onChange={handleChangePhoneNumber} style={{border:"none",height:"40px",width:'300px',backgroundColor:"none",borderRadius:"8px"}}/>
            </Form.Item>

            
            <div style={{ flexDirection:'row'}}>
            <label className="step1LabelInput mr-auto"> Mot de passe <span style={{color:'red'}}>*</span></label>
            </div>
            <Form.Item label="">
              <Input value={password} onChange={handleChangePassword} style={{border:"none",height:"40px",width:'300px',backgroundColor:"none",borderRadius:"8px"}}/>
            </Form.Item>

            
            <div style={{flexDirection:'row'}}>
            <label className="step1LabelInput mr-auto"> Confirmer Mot de passe <span style={{color:'red'}}>*</span></label>
            </div>
            <Form.Item label="">
              <Input value={confirmPassword} onChange={handleChangeConfirmPassword} style={{border:"none",height:"40px",width:'300px',backgroundColor:"none",borderRadius:"8px"}}/>
            </Form.Item>

            <Button onClick={handleClick} style={{height:"40px",color:"white",marginLeft:"50px",backgroundColor:'#1f3d83',width:'200px',marginTop:'30px',borderRadius:'20px',fontWeight:"600"}} variant="outlined" color="#1f3d83">
               Créer
            </Button>
                                
      
        
       </form>
      </div>
      
      </div>
      </div>
      </div>
     
  );
}


const mapStateToProps = createStructuredSelector({
  pageInscrip: makeSelectPageInscrip(),

});

function mapDispatchToProps(dispatch) {
  return {
    getRegisterForm: value => dispatch(getRegisterForm(value))

  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PageInscrip);
