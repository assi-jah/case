/**
 *
 * PageAccueil
 *
 */
 import React from 'react';
 import PropTypes from 'prop-types';
 import { connect } from 'react-redux';
 import { Helmet } from 'react-helmet';
 import { createStructuredSelector } from 'reselect';
 import { compose } from 'redux';
 import { useInjectSaga } from 'utils/injectSaga';
 import { useInjectReducer } from 'utils/injectReducer';
 import makeSelectPageAccueil from './selectors';
 import reducer from './reducer';
 import saga from './saga';
 import { Row, Col } from 'react-bootstrap';
 import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
 import AssistantIcon from '@material-ui/icons/Assistant';
 import ChatIcon from '@material-ui/icons/Chat';
 import HttpsIcon from '@material-ui/icons/Https';
 import SmartphoneIcon from '@material-ui/icons/Smartphone';
 import CheckIcon from '@material-ui/icons/Check';
 import CloseIcon from '@material-ui/icons/Close';
 import freeImg from 'images/free.png';
 import arpce from "images/logo_arpce.png";
 import expresso from "images/logo-expresso.gif";
 import bimao from "images/bimao.jpg";
 import '../App.css';
 import Header from '../../components/Header';
 import Outline from "../../images/Outline.png";
// import acc from "../../images/accueil2.jpg";
 import Audit from "../../images/Audit-conseil.png";
 import technical from "../../images/technical-support.png";
 import nsia from "../../images/nsia.png";
 import ands from  "../../images/ands.jpg";
 import boal from "../../images/logo_boad.jpg";
 import dgb from "../../images/dgb.png";
 import senelec from "../../images/senelec.png";
 import nma from "../../images/nma.png";
 import bgfi from "../../images/bgfi.png";
 import bnde from "../../images/bnde.png";
 import palm from "../../images/PASL.jpg";
 import fded from "../../images/fded.jpg";
 import bn from  "../../images/bn.jpg";
 import bhs from "../../images/logo_bhs.jpg";
 import cbi from "../../images/logo-cbi.jpg";
 import bcs from "../../images/bcs.jpg";
 import Bms from "../../images/Bms.jpg";
 import ecobank from "../../images/ecobank.png";
 import orabank from "../../images/logo-orabank.jpg";
 import bsic from "../../images/logo-bsic.jpg";
 import habita from "../../images/banque-habita-tchad.jpg";
 import cofinaBank from "../../images/cofinaBank.jpg";
 import Footer from '../../components/Footer';
import Button from '@material-ui/core/Button';

 


export function PageAccueil() {
  useInjectReducer({ key: 'pageAccueil', reducer });
  useInjectSaga({ key: 'pageAccueil', saga });

  return (
    <div>
      <Helmet>
        <title>PageAccueil</title>
        <meta name="description" content="Description of PageAccueil" />
      </Helmet>
      <Header/>
      <div className="container-fluid">
            <div className="row caseAccueil">

                <div className=" col-md-6 ml-4 mt-4 d-flex justify-content-center align-items-center flex-column">
                <span style={{fontSize:'40px',fontFamily:'Montserrat',fontWeight:"1000",color:'white',marginBottom:'50px'}} > Plus loin ensemble </span>
                <span style={{fontSize:'18px',fontFamily:'Montserrat',fontWeight:"400",color:'white',marginBottom:'20px'}}>
                    Avec l'outil CASE nous avons voulu vous proposer mieux qu'une Assistance technique tradutionnelle
                    mais plutot un accompagnement et un suivi professionnel efficient
                </span>

                <span style={{fontSize:'18px',fontFamily:'Montserrat',fontWeight:"400",color:'white'}}>
                    Notre principal challenge est de créer avec l'ensemble de nos clients
                    un lien colloboration permanent
                </span>
                <Button style={{height:"40px",color:"white",fontFamily:'Montserrat',fontSize:'18px',fontWeight:'600',marginTop:'20px'}} variant="outlined" color="#1f3d83">
                  Bénéficiez de la plateforme
               </Button>
               </div>
               <div className="col-md-6" />
            </div>
              <div className="row ml-4 mt-4">
                <div className="col-md-6">
                   <h1 className="titre_accueil">pourquoi case correspond  à vos attentes ?</h1>

                   <p className="p_accueil">Nos différents offre tecniques et solutions Business
                      connaissent un fort succés et vous avez été solliciter l'implémentation d'un
                      suivi d'utilisation avancée.
                   </p>

                   <p className="p_accueil">
                       Afin d'améliorer l'expérience proposée dans nos services
                       et etre en adéquation avec vos attentes, nous avons mis 
                       en place CASE Help Desk.
                   </p>

                   <p className="p_accueil">
                       Avec cet nouvelle interface support vous bénéficiez de
                       réponses plus précises, vous etes mis en relation avec 
                       des techniciens qpécialisées dans la solution logiciel 
                       Finetech que vous utilisez.
                   </p>
                </div>
                <div className="imgAcTwo col-md-6">
                    
                </div>

            </div>
               
               <div className="fonctionnalites"style={{backgroundColor:"#f8f6f6"}}>
               
                <div className="col-md-12">
                 <h1  className="titre_accueil ml-4 mt-4">fonctionnalités & outils</h1>
                 <p className="p_accueil_ ml-4 mt-4">Vous pourrez désormais trouver au sein de l'outil CASE les modules suivant </p>
                 <div>
                <Row className="accul-bordur_ ml-4 mt-4">
                    <Col md={3}>
                        <div className="col1">
                            <ConfirmationNumberIcon style={{fontSize:"50px",position:"relative",color:'#ffffff',border:"1px solid #1f3d83 ",marginTop:"65px",backgroundColor:'#1f3d83'}} />
                            <span className="txt_col">Gestion support</span>
                            <span className="txt_col1"> de vos tickets</span>
                         </div>
                    </Col >
                    <Col  md={3} >
                        <div className="col1" > 
                           <AssistantIcon  style={{fontSize:"50px",position:"relative",color:'#1f3D83',border:"1px solid #1f3d83 ",marginTop:"65px",backgroundColor:'#f3f5f8',backgroundColor:'#f3f5f8'}}/>
                            <span className="txt_col">Assistance </span>
                            <span className="txt_col1"> direct Technicien IT</span>
                         </div>
                    </Col>
                    <Col  md={3}>
                        <div className="col1">
                             <ChatIcon style={{fontSize:"50px",position:"relative",color:'#1f3D83',border:"1px solid #1f3d83 ",marginTop:"65px",backgroundColor:'#f3f5f8'}}/>
                            <span className="txt_col">Interface Chat</span>
                            <span className="txt_col1">Messagerie</span>   
                        </div>
                    </Col>
                    <Col  md={3}>
                        <div className="col1" > 
                            <HttpsIcon style={{fontSize:"50px",position:"relative",color:'#ffffff',border:"1px solid #1f3d83 ",marginTop:"65px",backgroundColor:'#1f3d83'}}/> 
                            <span className="txt_col">FAQ Service</span>
                            <span className="txt_col1">& Solutions Technique </span> 
                         </div>
                    </Col>
                </Row>
                    
                </div>
               
                
                </div>
                
               
                <div className="col-md-12">
                 <div>
                <Row className="accul-bordur_ ml-4 mt-4 mb-4">
                    <Col md={3}>
                        <div className="col1"> 
                           <img src ={Outline} alt ="" style={{position:"relative",color:'#1f3D83',height:"40px",border:"1px solid #1f3d83",marginTop:"65px",backgroundColor:'#f3f5f8',borderRadius:" 100 0 100 0"}} />
                           <span className="txt_col">Stratégie,Audit</span>
                           <span className="txt_col1"> & Conseil </span>
                        </div>
                    </Col >
                    <Col  md={3} >
                        <div className="col1" >
                            <img src ={Audit} alt ="" style={{position:"relative",color:'#ffffff',height:"40px",border:"1px solid #1f3d83 ",marginTop:"65px",backgroundColor:'#1f3d83'}}/>
                            <span className="txt_col">Accompagnement</span> 
                            <span className="txt_col1">& Formation professionnel</span> 
                        </div>
                    </Col>
                    <Col  md={3}>
                        <div className="col1">
                            <img src ={technical} alt ="" style={{position:"relative",color:'#1f3D83',height:"40px",border:"1px solid #1f3d83 ",marginTop:"65px",backgroundColor:'#f3f5f8'}}/>
                             <span className="txt_col">Implémentation Solution IT</span> 
                             <span className="txt_col1">& Business</span>
                         </div>
                    </Col>
                    <Col  md={3}>
                        <div className="col1" > 
                        <SmartphoneIcon style={{fontSize:"50px",position:"relative",color:'#ffffff',border:"1px solid #1f3d83 ",marginTop:"65px",backgroundColor:'#1f3d83'}}/>
                        <span className="txt_col"> FINAPPS  Sftware </span>
                        <span className="txt_col1"> & Soltution </span>
                        </div>
                       
                    </Col>
                </Row>
                    
                </div>
             </div>


             </div>
            

                <div>
                    <div className="col-md-12">
                        <h1 className="titre_accueil ml-4 mt-4">offres & modalités souscription</h1>


                        
                            <Row>

                            <Col className="colOne_  d-flex justify-content-center align-items-center flex-column">
                            <span style={{fontWeight:"600",fontSize:"25px",fontFamily:'Montserrat'}}>Support Classique </span>
                            <span style={{fontSize:"15px",fontFamily:'Montserrat'}}><CheckIcon/>Assistance technique</span>
                            <span style={{fontSize:"15px",fontFamily:'Montserrat'}}><CheckIcon/>Gestion de ticket</span>
                            <span style={{fontSize:"15px",fontFamily:'Montserrat'}}><CheckIcon/>10 Comptes Affiliés</span>
                            <span style={{fontSize:"15px",fontFamily:'Montserrat'}}><CloseIcon style={{color:"red"}}/>Agent Support dédiée 24H/24H</span>
                            <span style={{fontSize:"15px",fontFamily:'Montserrat'}}><CloseIcon style={{color:"red"}}/>Appels vidéo</span>
                            <span style={{fontSize:"15px",fontFamily:'Montserrat'}}><CloseIcon style={{color:"red"}}/>Intervention technique et Garantie</span>

                            <Button style={{height:"40px",color:"#1f3d83",fontFamily:'Montserrat',fontSize:'18px',fontWeight:'600',marginTop:'15px'}} variant="outlined" color="#1f3d83">
                                       DEMARRER
                            </Button> 
                            </Col>

                            

                            <Col className="colTwo_  d-flex justify-content-center align-items-center flex-column">
                            <span style={{fontWeight:"600",fontSize:"25px",fontFamily:'Montserrat'}}> Premiun Service</span>
                            <span style={{fontSize:"15px",fontFamily:'Montserrat'}}><CheckIcon/>Assistance technique</span>
                            <span style={{fontSize:"15px",fontFamily:'Montserrat'}}><CheckIcon/>Gestion de ticket</span>
                            <span style={{fontSize:"15px",fontFamily:'Montserrat'}}><CheckIcon/>200 Comptes Affiliés</span>
                            <span style={{fontSize:"15px",fontFamily:'Montserrat'}}><CloseIcon style={{color:"red"}}/>Appels vidéo</span>
                            <span style={{fontSize:"15px",fontFamily:'Montserrat'}}><CloseIcon style={{color:"red"}}/>Agent Support dédiée 24H/24H</span>
                            <Button style={{height:"40px",color:"white",fontFamily:'Montserrat',fontSize:'18px',fontWeight:'600',marginTop:'20px'}} variant="outlined" color="#1f3d83">
                                       DEMARRER
                            </Button> 
                            </Col>

                            <Col className="colOne_   d-flex justify-content-center align-items-center flex-column">
                            
                            <span style={{fontWeight:"600",fontSize:"25px",fontFamily:'Montserrat'}}>Support Custom</span>
                            <span style={{fontSize:"15px",fontFamily:'Montserrat'}}><CheckIcon/>Assistance technique Custom</span>
                            <span style={{fontSize:"15px",fontFamily:'Montserrat'}}><CheckIcon/>Gestion de ticket</span>
                            <span style={{fontSize:"15px",fontFamily:'Montserrat'}}><CheckIcon/>Comptes Affiliés au choix</span>
                            <span style={{fontSize:"15px",fontFamily:'Montserrat'}}><CheckIcon/>Appels vidéo & Consultation technique</span>
                            <span style={{fontSize:"15px",fontFamily:'Montserrat'}}><CheckIcon/>Suivi et Maintenance produit 24H/24h</span>
                            <Button style={{height:"40px",color:"#1f3d83",fontFamily:'Montserrat',fontSize:'18px',fontWeight:'600',marginTop:'20px'}} variant="outlined" color="#1f3d83">
                                       DEMARRER
                            </Button> 
                            </Col>

                            </Row>
                            
                        
                        
                            

                <div>
                    <div className="col-md-12">
                        <h1 className="titre_accueil_ ml-4 ">tous nos grands clients l'utilisent déja !</h1>
                    </div>
                    
                </div>
               
               <div className="row ml-4 mt-4">
                  <div className="col-md-2">

                  <img className="" src ={cofinaBank} alt ="" style={{width:"120px",paddingTop:"10px"}}/>
                  <img className="" src ={habita} alt ="" style={{width:"120px",paddingTop:"30px"}}/>
                  <img className="" src ={bsic} alt =""style={{width:"120px",paddingTop:"30px"}} />
                  <img className="" src ={orabank} alt =""style={{width:"120px",paddingTop:"30px"}} />

                  </div>
                    
                  <div className="col-md-2">

                  <img className="" src ={ecobank} alt ="" style={{width:"120px",paddingTop:"18px"}} />
                  <img className="" src ={Bms} alt ="" style={{width:"120px",paddingTop:"18px"}} />
                  <img className="" src ={bcs} alt ="" style={{width:"120px",paddingTop:"18px"}}/>
                  <img className="" src ={cbi} alt =""style={{width:"120px",paddingTop:"18px"}} />

                  </div>

                  <div className="col-md-2">

                  <img className="" src ={bhs} alt =""style={{width:"120px",paddingTop:"18px"}} />
                  <img className="" src ={bn} alt =""style={{width:"120px",paddingTop:"18px"}} />
                  <img className="" src ={fded} alt =""style={{width:"120px",paddingTop:"30px"}} />
                  <img className="" src ={palm} alt ="" style={{width:"120px",paddingTop:"30px"}}/>

                  </div>

                  <div className="col-md-2">
                   
                  <img className="" src ={bnde} alt =""style={{width:"120px",paddingTop:"18px"}} />
                  <img className="" src ={bgfi} alt ="" style={{width:"120px",paddingTop:"18px"}}/>
                  <img className="" src ={nma} alt ="" style={{width:"120px",paddingTop:"18px"}}/>
                  <img className="" src ={senelec} alt =""style={{width:"120px",paddingTop:"18px"}} />

                  </div>

                  <div className="col-md-2">

                  <img className="" src ={dgb} alt =""style={{width:"118px",paddingTop:"18px"}} />
                  <img className="" src ={boal} alt =""style={{width:"118px"}} />
                  <img className="" src ={ands} alt =""style={{width:"120px"}} />
                  <img className="" src ={nsia} alt =""style={{width:"115px"}} />

                  </div>

                  <div className="col-md-2">

                  <img className="" src ={bimao}  alt =""style={{width:"120px"}} />
                  <img className="" src ={expresso} alt =""style={{width:"120px"}} />
                  <img className="" src ={arpce} alt =""style={{width:"120px",paddingTop:"30px"}} />
                  <img className="" src ={freeImg} alt =""style={{width:"120px",paddingTop:"50px"}} />
                  
                  </div>
                  </div>
                  </div>
               </div>
               </div>
               <div>
               <span style={{opacity:"0.66",fontSize:"16px",marginLeft:"50px"}}>CASE  2020-2021 | GROUPE FINETECH tous les droits réservés</span>
               </div>
    </div>
  );
}

PageAccueil.propTypes = {
    dispatch: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = createStructuredSelector({
    pageAccueil: makeSelectPageAccueil(),
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
  
  export default compose(withConnect)(PageAccueil);
  