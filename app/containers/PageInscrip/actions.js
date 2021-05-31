/*
 *
 * PageInscrip actions
 *
 */

import { GET_REGISTER_FORM } from './constants';

export function getRegisterForm(data) {
  return {
    type: GET_REGISTER_FORM,
    data
  };
}
