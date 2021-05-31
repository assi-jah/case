import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pageApropos state domain
 */

const selectPageAproposDomain = state => state.pageApropos || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PageApropos
 */

const makeSelectPageApropos = () =>
  createSelector(
    selectPageAproposDomain,
    substate => substate,
  );

export default makeSelectPageApropos;
export { selectPageAproposDomain };
