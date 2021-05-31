/**
 *
 * InfoCompStepThree
 *
 */

import React, { useEffect, useState } from "react";
import { Form, Input, Select } from 'antd';
import { connect } from "react-redux";
import { compose } from "redux";

import { createStructuredSelector } from "reselect";
import selectIcon from './groupe-1788.png';
import './InfoCompStepThree.css';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function InfoCompStepThree() {



  return (
            <div className="container">
            <div className="row">
              <div className="col-md-">

              <p className="paragraphe-validation">Les présentes conditions générales sont applicables à CASE et l'ensemble 
                         de ses services associés.
                         Elles sont des applicables dans leur intégralité pour tout contrat passé 
                         de livraison entre CASE et ses clients finaux au Sénégal ou à l'étranger,quel que
                         soit sle lieu  Toutes conditions contraire aux présentes conditions générales posée par 
                         le client, dans ses conditions générales ou dans tout autre document, sera inopposable 
                         à CASE quel que soit le moment ou aura pu etre portée sont applicables à sa connaissance.Sans accord
                         exprés et préalable de CASE ,nous n'admettrons aucune dérogation aux présentes
                         conditions générales de vente. CASE se réserve le droit de procéder à tout 
                         moment à des modifications des présentes conditions générales de ventes
                       </p>
                       <input type="checkbox" className="steak"/> <label for="">J'accepte les conditions d'utilisation de la plateforme</label>

              </div>
            </div>
            </div>
        );
}


InfoCompStepThree.propTypes = {};

export default InfoCompStepThree;
