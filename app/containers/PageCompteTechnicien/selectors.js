import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pageCompteTechnicien state domain
 */

const selectPageCompteTechnicienDomain = state =>
  state.pageCompteTechnicien || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PageCompteTechnicien
 */

const makeSelectPageCompteTechnicien = () =>
  createSelector(
    selectPageCompteTechnicienDomain,
    substate => substate,
  );

export default makeSelectPageCompteTechnicien;
export { selectPageCompteTechnicienDomain };
