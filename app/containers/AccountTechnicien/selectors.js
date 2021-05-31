import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the accountTechnicien state domain
 */

const selectAccountTechnicienDomain = state =>
  state.accountTechnicien || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AccountTechnicien
 */

const makeSelectAccountTechnicien = () =>
  createSelector(
    selectAccountTechnicienDomain,
    substate => substate,
  );

export default makeSelectAccountTechnicien;
export { selectAccountTechnicienDomain };
