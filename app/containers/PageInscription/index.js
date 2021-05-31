/**
 *
 * PageInscription
 *
 */

 import React, { useState } from 'react';
 import PropTypes from 'prop-types';
 import { connect } from 'react-redux';
 import { Helmet } from 'react-helmet';
 import { createStructuredSelector } from 'reselect';
 import { compose } from 'redux';
 
 import { useInjectSaga } from 'utils/injectSaga';
 import { useInjectReducer } from 'utils/injectReducer';
 import makeSelectPageInscription from './selectors';
 import reducer from './reducer';
 import saga from './saga';
 import Header from '../../components/Header';
 import '../App.css';
 import InscriptionPhaseUn from '../../components/InscriptionPhaseUn';
 import InscriptionPhaseDeux from '../../components/InscriptionPhaseDeux';
 import InscriptionPhaseTrois from '../../components/InscriptionPhaseTrois';
import Footer from '../../components/Footer';
 
export function PageInscription() {
  useInjectReducer({ key: 'pageInscription', reducer });
  useInjectSaga({ key: 'pageInscription', saga });

  
  const [toggleTabs, setToggleTabs] = useState(1);

    const toggleTab = (index) => {
      setToggleTabs(index);
    };


  return (
    <div>
      <Helmet>
        <title>PageInscription</title>
        <meta name="description" content="Description of PageInscription" />
      </Helmet>
       
      <Header/>
      <div >

<h3 className="titreinscription">ouvrir un compte pour acceder a la plateforme</h3><br/>
 
<div className="cntainer">
<div className="bloc-onglets">
 <div
 className={toggleTabs === 1 ? "tabs active-tabs" : "tabs"}
 onClick={() => toggleTab(1)}
 >
 <span className="lien__">1</span><br/>
 <span>Informations de compte</span>
 </div>
 <div
 className={toggleTabs === 2 ? "tabs active-tabs" : "tabs"}
 onClick={() => toggleTab(2)}
 >
 <span className="lien__">2</span><br/>
 <span>Spécifité et Niveau de support</span>
 </div>
 <div
 className={toggleTabs === 3 ? "tabs active-tabs" : "tabs"}
 onClick={() => toggleTab(3)}
 >
<span className="lien__">3</span><br/>
<span> Validation de votre inscription</span>
 </div>
</div>

<div className="contenu-onglets">
 <div
 className={toggleTabs === 1 ? "contenu active-contenu" : "contenu"}
 >
   <InscriptionPhaseUn handleClick={toggleTab}/>
   
 </div>

 <div
 className={toggleTabs === 2 ? "contenu active-contenu" : "contenu"}
 >
 <InscriptionPhaseDeux handleClick={toggleTab}/>
 
 </div>

 <div
 className={toggleTabs === 3 ? "contenu active-contenu" : "contenu"}
 >
 <InscriptionPhaseTrois handleClick={toggleTab}/>
 
 </div>
</div>
</div>
</div>

  
 </div>
  );
}
PageInscription.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pageInscription: makeSelectPageInscription(),
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

export default compose(withConnect)(PageInscription);

