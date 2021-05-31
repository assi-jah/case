import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pageMotDePassePerduIntervenant state domain
 */

const selectPageMotDePassePerduIntervenantDomain = state =>
  state.pageMotDePassePerduIntervenant || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PageMotDePassePerduIntervenant
 */

const makeSelectPageMotDePassePerduIntervenant = () =>
  createSelector(
    selectPageMotDePassePerduIntervenantDomain,
    substate => substate,
  );

export default makeSelectPageMotDePassePerduIntervenant;
export { selectPageMotDePassePerduIntervenantDomain };
