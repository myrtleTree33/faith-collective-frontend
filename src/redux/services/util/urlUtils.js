// contains and wraps utils for fetching json files

/* global fetch */

function handleErrors(response) {
  if (!response.ok) throw Error(response.status);
  return response;
}

const _fetchJson = (url, opts = {}) =>
  fetch(url, {
    ...opts,
    headers: {
      ...opts.headers,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then(handleErrors);

/**
 * Marshals Fetch API to JSON
 *
 * @param {*} url
 * @param {*} opts
 */
export const fetchJson = (url, opts = {}) => {
  return _fetchJson(url, opts).then(res => res.json());
};

/**
 *  Marshals Fetch API to JSON with auth
 * Note that localStorage should have an
 * item with key 'token'
 *
 * @param {*} url
 * @param {*} opts
 */
export const fetchJsonAuth = (url, opts = {}) => {
  return _fetchJson(url, {
    ...opts,
    headers: {
      ...opts.headers,
      Authorization: `jwt ${localStorage.getItem('token')}`
    }
  }).then(res => {
    if (res.status === 401) {
      // unauthorized; cause user to logout and set token to null
      localStorage.removeItem('token', null);
      return res;
    }
    return res.json();
  });
};
