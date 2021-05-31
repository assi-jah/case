/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PageAccueil from 'containers/PageAccueil';
import PageApropos from 'containers/PageApropos';
import PageConnexion from 'containers/PageConnexion';
import PageInscription from 'containers/PageInscription';
import PageMotDePassePerdu from 'containers/PageMotDePassePerdu';
import PageOuvertureCompteTechnicien from 'containers/PageOuvertureCompteTechnicien';
import PageCompteTechnicien from 'containers/PageCompteTechnicien/Loadable';
import PageMotDePassePerduIntervenant from 'containers/PageMotDePassePerduIntervenant';
import PageInscrip from 'containers/PageInscrip';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from '../../global-styles';
import InfoComplementaire from 'containers/InfoComplementaire';
import AccountTechnicien from 'containers/AccountTechnicien';





export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/accueil" component={PageAccueil} />
        <Route path="/Case_apropo_infos" component={PageApropos} />
        <Route path="/connexion" component={PageConnexion} />
        <Route path="/inscription" component={PageInscription} />
        <Route path="/motdepasseperdu" component={PageMotDePassePerdu}/>
        <Route path="/ouverturecompteTechnicien" component={PageOuvertureCompteTechnicien} />
        <Route path="/compteTechnicien" component={PageCompteTechnicien}/>
        <Route path="/motDePerduTech" component={PageMotDePassePerduIntervenant}/>
        <Route path="/ComplementaireInfos" component={InfoComplementaire}/>
        <Route path="/inscrir" component={PageInscrip}/>
        <Route path="/caseConnexion" component={AccountTechnicien }/>

      </Switch>
      <GlobalStyle />
    </div>
  );
}
