import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pageMotDePassePerdu state domain
 */

const selectPageMotDePassePerduDomain = state =>
  state.pageMotDePassePerdu || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PageMotDePassePerdu
 */

const makeSelectPageMotDePassePerdu = () =>
  createSelector(
    selectPageMotDePassePerduDomain,
    substate => substate,
  );

export default makeSelectPageMotDePassePerdu;
export { selectPageMotDePassePerduDomain };
