/**
 *
 * Header
 *
 */
 import React from 'react';
 import { connect } from 'react-redux';
 import { compose } from 'redux';
 import history from 'utils/history';
 import { Link } from 'react-router-dom';
 import apropos from "../../images/Apropos.png";
 import case2 from "../../images/case2.png";
 import PermIdentityIcon from '@material-ui/icons/PermIdentity';
 
 import { makeSelectIsVisible } from 'containers/App/selectors';
 import { setButtonconins } from 'containers/App/actions';
 import { createStructuredSelector } from 'reselect';
 import { Button } from 'react-bootstrap';
 // import PropTypes from 'prop-types';
 // import styled from 'styled-components';
 
 function Header({setButton,isVisible}) {
 
 
  const handleClickBtnCon = () => {
     setButton(!isVisible)
     history.push('/caseConnexion')
   }
 
  const handleClickBtnIns = () => {
     setButton(!isVisible)
     history.push('/inscription')
   }
   const handleClickBtnPropo = () => {
     setButton(!isVisible)
     history.push('/Case_apropo_infos')
   }
 
   return (
     <div>
       <header className="header_">
       
       <div>
        <img className="inscrip-img" src ={case2} alt =""/>
        <span className=""style={{fontFamily: "Montserrat",fontSize: "15px",fontWeight: "550",fontStretch: "normal",lineHeight:"1.23",letterSpacing:"0.52px"}}> 
        | Centre d'assistance et de support en électronique</span>
      </div>
         
       <div>
         <nav className="header_accueil_link"> 
 
            
             { isVisible === false &&
                <span  style={{cursor:'pointer',fontFamily:"Montserrat"}} onClick={handleClickBtnPropo} className="button_apropo"> <img className="apropo_img" src={apropos} /> 
                A propos 
                <span style={{paddingLeft:"10px",paddingRight:"10px"}}>|</span>
                </span>
             }
           
 
             { isVisible === false &&
               <span style={{cursor:'pointer',fontFamily:"Montserrat"}} onClick={handleClickBtnCon} className="button_connexion"> < PermIdentityIcon/>  Connexion</span>
             }
 
             { isVisible === true &&
               <span style={{cursor:'pointer',fontFamily:"Montserrat"}} onClick={handleClickBtnIns} className="button_inscription"> < PermIdentityIcon/>  Inscription</span>
             }
 
           
 
         </nav>
         </div>  
 
    </header>
     </div>
   );
 }
 
 Header.propTypes = {};
 const mapStateToProps = createStructuredSelector({
  // pageAccueil: makeSelectPageAccueil(),
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
 
 export default compose(withConnect)(Header);
 