import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the InfoComplementaire state domain
 */

const selectInfoComplementaireDomain = state =>
  state.InfoComplementaire || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by InfoComplementaire
 */

const makeSelectInfoComplementaire = () =>
  createSelector(
    selectInfoComplementaireDomain,
    substate => substate,
  );

export default makeSelectInfoComplementaire;
export { selectInfoComplementaireDomain };
