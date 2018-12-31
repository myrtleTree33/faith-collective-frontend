import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_INVALID
} from '../constants/userConstants';
import { login, loginClassic } from '../services/userService';

function userLoginSync(provider, providerToken, token, user) {
  return {
    type: USER_LOGIN,
    payload: { provider, providerToken, token, user }
  };
}

function userLogoutSync() {
  return { type: USER_LOGOUT, payload: {} };
}

export function userLoginClassic(email, password) {
  return dispatch => {
    loginClassic(email, password)
      .then(res => {
        const { user, token } = res;
        dispatch(userLoginSync('classic', null, token, user));
        // redirect to main page if successfully logged in
        window.location.href = '/';
      })
      .catch(err => {
        console.error(err);
        return { type: USER_INVALID };
      });
  };
}

/**
 * Thunk to login
 * @param {*} provider
 */
export function userLogin(provider, providerToken) {
  console.log(provider, providerToken);
  return dispatch => {
    login(provider, providerToken)
      .then(res => {
        const { user, token } = res;
        dispatch(userLoginSync(provider, providerToken, token, user));
        // redirect to main page if successfully logged in
        window.location.href = '/';
      })
      .catch(err => {
        console.error(err);
        return { type: USER_INVALID };
      });
  };
}

/**
 * Thunk to logout
 * @param {*} provider
 */
export function userLogout() {
  return dispatch => {
    dispatch(userLogoutSync());
    window.location.href = '/';
  };
}
