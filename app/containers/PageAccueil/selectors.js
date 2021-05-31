import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pageAccueil state domain
 */

const selectPageAccueilDomain = state => state.pageAccueil || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PageAccueil
 */

const makeSelectPageAccueil = () =>
  createSelector(
    selectPageAccueilDomain,
    substate => substate,
  );

export default makeSelectPageAccueil;
export { selectPageAccueilDomain };
