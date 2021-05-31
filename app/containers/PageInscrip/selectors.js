import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pageInscrip state domain
 */

const selectPageInscripDomain = state => state.pageInscrip || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PageInscrip
 */

const makeSelectPageInscrip = () =>
  createSelector(
    selectPageInscripDomain,
    substate => substate,
  );

const makeSelectGetUserRegister = () =>
  createSelector(
    selectPageInscripDomain,
    substate => substate.data,
  );

export default makeSelectPageInscrip;
export { selectPageInscripDomain, makeSelectGetUserRegister };
