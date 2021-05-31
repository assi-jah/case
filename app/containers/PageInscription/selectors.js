import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pageInscription state domain
 */

const selectPageInscriptionDomain = state =>
  state.pageInscription || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PageInscription
 */

const makeSelectPageInscription = () =>
  createSelector(
    selectPageInscriptionDomain,
    substate => substate,
  );

export default makeSelectPageInscription;
export { selectPageInscriptionDomain };
