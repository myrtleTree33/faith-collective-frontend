import { fetchJson, fetchJsonAuth } from './util/urlUtils';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const POST_GOOGLE_LOGIN_URL = `${BACKEND_URL}/auth/google/token`;
const POST_FACEBOOK_LOGIN_URL = `${BACKEND_URL}/auth/facebook/token`;
const POST_CLASSIC_SIGNUP_URL = `${BACKEND_URL}/auth/classic/new`;
const POST_CLASSIC_LOGIN_URL = `${BACKEND_URL}/auth/classic/token`;
const GET_USER_URL = `${BACKEND_URL}/user/curr`;

export function login(provider, token) {
  let selBackendUrl = null;

  if (provider === 'google') {
    selBackendUrl = POST_GOOGLE_LOGIN_URL;
    return fetchJson(selBackendUrl, {
      method: 'POST',
      body: JSON.stringify({ access_token: token })
    });
  } else if (provider === 'facebook') {
    selBackendUrl = POST_FACEBOOK_LOGIN_URL;
    return fetchJson(selBackendUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}

export function signupClassic({
  email,
  password,
  firstName,
  lastName,
  birthDate
}) {
  return fetchJson(POST_CLASSIC_SIGNUP_URL, {
    method: 'POST',
    body: JSON.stringify({ email, password, firstName, lastName, birthDate })
  });
}

export function loginClassic(email, password) {
  return fetchJson(POST_CLASSIC_LOGIN_URL, {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
}

export function getUser() {
  console.log('Get user got called');
  return fetchJsonAuth(GET_USER_URL);
}

export function getLocalCredentials() {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  if (token && user) {
    return { token, user: JSON.parse(user) };
  }
  return null;
}
