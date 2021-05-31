import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pageTicketting state domain
 */

const selectPageTickettingDomain = state =>
  state.pageTicketting || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PageTicketting
 */

const makeSelectPageTicketting = () =>
  createSelector(
    selectPageTickettingDomain,
    substate => substate,
  );

export default makeSelectPageTicketting;
export { selectPageTickettingDomain };
