import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pageConnexion state domain
 */

const selectPageConnexionDomain = state => state.pageConnexion || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PageConnexion
 */

const makeSelectPageConnexion = () =>
  createSelector(
    selectPageConnexionDomain,
    substate => substate,
  );

export default makeSelectPageConnexion;
export { selectPageConnexionDomain };
