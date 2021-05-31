/**
 *
 * PageConnexion
 *
 */

 import React, { useEffect } from 'react';
 import PropTypes from 'prop-types';
 import { connect } from 'react-redux';
 import { Helmet } from 'react-helmet';
 import { createStructuredSelector } from 'reselect';
 import { compose } from 'redux';
 import { useInjectSaga } from 'utils/injectSaga';
 import { useInjectReducer } from 'utils/injectReducer';
 import makeSelectPageConnexion from './selectors';
 import reducer from './reducer';
 import saga from './saga';
 
 import Button from '@material-ui/core/Button';
 import HomeIcon from '@material-ui/icons/Home';
 import { makeStyles } from '@material-ui/core/styles';
 import '../App.css';
 import HttpsRoundedIcon from '@material-ui/icons/HttpsRounded';
 import Header from '../../components/Header';
 import Footer from '../../components/Footer';
 import { Link } from 'react-router-dom';
 import part from "../../images/part.jpg"
 import { setButtonconins } from '../App/actions';
 import { makeSelectIsVisible } from '../App/selectors';
 import { Form, Input } from 'antd';

 
export function PageConnexion() {
  useInjectReducer({ key: 'pageConnexion', reducer });
  useInjectSaga({ key: 'pageConnexion', saga });

  return (
    <div>
      <Helmet>
        <title>PageConnexion</title>
        <meta name="description" content="Description of PageConnexion" />
      </Helmet>
      
      <Header/>
      
      
      <div className="container-fluid">
            
            <div className="row">
                <div className=" col-md-5  d-flex justify-content-center align-items-center flex-column">

                   <span className="titre-connexion">CONNECTION</span>
   
                        <form>
                        <div style={{}}>
                        <label className="label-client mr-auto">Identifiant ou e-mail<span style={{color:'red'}}>*</span></label>
                        </div>
                        <Form.Item label="">
                          <Input style={{border:"none",height:"40px",width:'300px',backgroundColor:"none",borderRadius:"8px"}}/>
                        </Form.Item>

                        
                        <div style={{}}>
                        <label className="label-client mr-auto">Code d'identifiant de la société<span style={{color:'red'}}>*</span></label>
                        </div>
                        <Form.Item label="">
                          <Input style={{border:"none",height:"40px",width:'300px',backgroundColor:"none",borderRadius:"8px"}}/>
                        </Form.Item>




                        
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

                        <div style={{}}>
                        <label className="label-client mr-auto">Mot de passe<span style={{color:'red'}}>*</span></label>
                        </div>
                      
                        <Button style={{height:"40px",color:"white",marginLeft:"50px",backgroundColor:'#1f3d83',width:'200px',marginTop:'30px',borderRadius:'20px',fontWeight:"600"}} variant="outlined" color="#1f3d83">
                          Se connecter
                        </Button>
                      
                        
                               <div className="link-pag-client">
                                  
                                  <Link  style={{paddingBottom:"1px",fontFamily:"Montserrat",fontSize:"16px",color:"#1f3d83",marginTop:"50px"}}
                                   to="/MotDePassePerdu">
                                    Mot de passe oublié ? Créer un compte <br/>
                                  </Link>
                                  
                                   
                                  <Link style={{paddingBottom:"1px",fontFamily:"Montserrat",fontSize:"16px",color:"#1f3d83",marginTop:"80px"}}
                                   to ="/inscrir">
                                     S'inscrire à la plateforme
                                  </Link>
                                  
                                </div>
                            
                        </form>
                      
                </div>
          
            <div className="client-img col-md-7" >
              <span className="conect-title d-flex justify-content-center align-items-center flex-column">vous êtes à quelques pas de la solution !</span>
            </div>
        </div> 
        </div>
    </div>
  );
}

PageConnexion.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pageConnexion: makeSelectPageConnexion(),
  isVisible : makeSelectIsVisible(),
});

function mapDispatchToProps(dispatch) {
  return {
    setButton : value => dispatch(setButtonconins(value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(PageConnexion);
