import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pageOuvertureCompteTechnicien state domain
 */

const selectPageOuvertureCompteTechnicienDomain = state =>
  state.pageOuvertureCompteTechnicien || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PageOuvertureCompteTechnicien
 */

const makeSelectPageOuvertureCompteTechnicien = () =>
  createSelector(
    selectPageOuvertureCompteTechnicienDomain,
    substate => substate,
  );

export default makeSelectPageOuvertureCompteTechnicien;
export { selectPageOuvertureCompteTechnicienDomain };
