/**
 *
 * PageApropos
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
 import makeSelectPageApropos from './selectors';
 import reducer from './reducer';
 import saga from './saga';
 import Header from '../../components/Header';
 import { Row, Col } from 'react-bootstrap';
 import CheckIcon from '@material-ui/icons/Check';
 import CloseIcon from '@material-ui/icons/Close';
 import '../App.css';
 import responsible from "../../images/responsible.png";
 import imageHD from "../../images/ImageHD.png";


export function PageApropos() {
  useInjectReducer({ key: 'pageApropos', reducer });
  useInjectSaga({ key: 'pageApropos', saga });

  return (
    <div>
      <Helmet>
        <title>PageApropos</title>
        <meta name="description" content="Description of PageApropos" />
      </Helmet>
      
      <Header/>
      <div className="container">

                          <div className="row">

                            <div className="col-md-6">
                                <img className="Case_apropo_image1" src ={responsible} alt =""/>

                                <p style={{fontFamily:'Montserrat'}}>
                                    CASE est application web/mobile du Groupe FINETECH,
                                    nous permettrons d'offrir nos services a nos collaborateurs.
                                </p>

                                <p style={{fontFamily:'Montserrat'}}>
                                    Cette nouvelle application est solution idéale pourles banques
                                    et les grandes institutions bancaires qui souhaitent bénéficier 
                                    d'une assistance maintenance permanente, mais également pour 
                                    tout type de client pourrait bénéficier des services de support
                                    en ligne.
                                </p>
                            </div>

                            <div className="col-md-6">
                                <img className="Case_apropo_image2" src ={imageHD} alt =""/>
                            </div>

                          </div>

                        </div>
                    <div className="apropo_nsp">
                        <Row>
                          <Col >
                           <h1 className="apropo_titre">niveau de supports fournis</h1>
                              <p className="apropo_paragraphe_deux">
                                    Nous vous fournissons trois niveaux de supports concu de maniére
                                    adéquate a vos besoins: Un support prémium un offre de support personnalisé.
                                    Chaque niveaux de supports vous permets de bénéficier d'un nombre de sous utilisateur
                                    spécifiques que nous comptes affilés.<br/>
                                    ces comptes affilés constitue votre plage de compte attribuable a votre personnel.Ils pourront
                                    nous  contacter a tout moment grace a de tickets supports pour une assistance technique, souscrire
                                    au différents services FINETECH, et solutions FINAPPS.
                              </p>
                         </Col>
                        </Row>
                         
                         

                    


                    <Row className="accul-bordur__">
                            <Col md={4}>
                                <div className="col2" > 
                                    <span className="txt_col2" style={{paddingTop:"40px",fontSize:"30px" }}>Support Classique</span>  
                                    <span className="txt_col3"style={{paddingTop:"15px",fontSize:"15px" }}><CheckIcon/>Assistance technique</span>
                                    <span className="txt_col4"style={{paddingTop:"15px",fontSize:"15px" }}><CheckIcon/>Gestion de ticket</span>
                                    <span className="txt_col4"style={{paddingTop:"15px",fontSize:"15px" }}><CheckIcon/>10 Comptes Affiliés</span>
                                    <span className="txt_col4"style={{paddingTop:"15px",fontSize:"15px" }}><CloseIcon style={{color:"red"}}/>Appels vidéo</span>
                                    <span className="txt_col4"style={{paddingTop:"15px",fontSize:"15px" }}><CloseIcon style={{color:"red"}}/>Agent Support dédiée 24H/24H</span>
                                    <input className="col2_demarrer1" type ="submit" value="DEMARRER"/>


                                </div>
                            </Col >
                            
                            <Col md={4}>
                                <div className="col2-"> 
                                <span className="txt_col2"style={{paddingTop:"80px",fontSize:"30px" }}>Premium Service</span>   
                                <span className="txt_col3"style={{paddingTop:"15px",fontSize:"15px" }}><CheckIcon />Assistance technique</span>
                                <span className="txt_col4"style={{paddingTop:"15px",fontSize:"15px" }}><CheckIcon/>Gestion de ticket</span>
                                <span className="txt_col4"style={{paddingTop:"15px",fontSize:"15px" }}><CheckIcon/>200 Comptes Affiliés</span>
                                <span className="txt_col4"style={{paddingTop:"15px",fontSize:"15px" }}><CheckIcon/>Agent Support dédiée 24H/24H</span>
                                <span className="txt_col4"style={{paddingTop:"15px",fontSize:"15px" }}><CheckIcon/>Appels vidéo</span>
                                <span className="txt_col4"style={{paddingTop:"15px",fontSize:"15px" }}><CloseIcon style={{color:"red"}}/>Intervention technique et Garantie</span>
                                <input className="col2_demarrer3" type ="submit" value="DEMARRER" />
                                </div>
                            </Col >
                            
                            <Col md={4}>
                                <div className="col2"> 
                                <span className="txt_col2" style={{paddingTop:"40px",fontSize:"30px" }}>Support Custom</span> 
                                <span className="txt_col3"style={{paddingTop:"15px",fontSize:"15px" }}><CheckIcon/>Assistance technique Custom</span>  
                                <span className="txt_col4"style={{paddingTop:"15px",fontSize:"15px" }}><CheckIcon/>Gestion de ticket</span>
                                <span className="txt_col4"style={{paddingTop:"15px",fontSize:"15px" }}><CheckIcon/>Comptes Affiliés au choix</span>
                                <span className="txt_col4"style={{paddingTop:"15px",fontSize:"15px" }}><CheckIcon/>Agent Support dédiée</span>
                                <span className="txt_col4"style={{paddingTop:"15px",fontSize:"15px" }}><CheckIcon/>Appels vidéo & Consultqtion techniaue</span>
                                <span className="txt_col4"style={{paddingTop:"15px",fontSize:"15px" }}><CheckIcon/>Suivi et Maintenance produit 24H/24H</span>
                                <input className="col2_demarrer" type ="submit" value="DEMARRER"/>
                                </div>
                            </Col >
                       </Row>

                       </div>
                       <div>
                            <span style={{opacity:"0.66",fontSize:"16px",marginLeft:"170px"}}>CASE  2020-2021 | GROUPE FINETECH tous les droits réservés</span>
                       </div>
    </div>
  );
}

PageApropos.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pageApropos: makeSelectPageApropos(),
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

export default compose(withConnect)(PageApropos);

