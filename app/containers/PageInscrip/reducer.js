/*
 *
 * PageInscrip reducer
 *
 */
import produce from 'immer';
import { GET_REGISTER_FORM } from './constants';

export const initialState = {
  data:{}
};

/* eslint-disable default-case, no-param-reassign */
const pageInscripReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_REGISTER_FORM:
        draft.data = action.data
        break;
    }
  });

export default pageInscripReducer;
