import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import { GET_REGISTER_FORM } from './constants';
import { makeSelectGetUserRegister } from './selectors';

// Individual exports for testing
export default function* pageInscripSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_REGISTER_FORM, getUserRegisterForm);
}

export function* getUserRegisterForm() {
  // Select username from store
  const id_token = ""
  const data = yield select(makeSelectGetUserRegister());
  const requestURL = `http://localhost:3004/utilisateur`;

  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization:  `Bearer ${id_token} `
    },
    body: JSON.stringify(data)
  }

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL, option);
    console.log(repos)
  } catch (err) {
    console.log(err);
  }
}
