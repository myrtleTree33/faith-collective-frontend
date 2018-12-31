import createReducer from './util/baseReducer';
import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_INVALID
} from '../constants/userConstants';

// hydrate state and parse if possible
const authObjStr = localStorage.getItem('auth');

// of the shape:
// initialState = {
//   user: {},
//   token: ''
// }
const initialState = authObjStr ? JSON.parse(authObjStr) : {};

function userInvalid(state, action) {
  localStorage.removeItem('auth');
  return {};
}

function userLogin(state, action) {
  const stateNew = action.payload;
  const { provider, token, providerToken, user } = stateNew;

  if (provider === 'classic') {
    if (!user || !token) {
      return userInvalid(null, action);
    }
  } else if (!provider || !token || !user || !providerToken) {
    return userInvalid(null, action);
  }

  // persist in localStorage
  localStorage.setItem('auth', JSON.stringify(stateNew));
  return stateNew;
}

function userLogout(state, action) {
  return userInvalid(null, action);
}

export default createReducer(initialState, {
  [USER_LOGIN]: userLogin,
  [USER_LOGOUT]: userLogout,
  [USER_INVALID]: userInvalid
});
