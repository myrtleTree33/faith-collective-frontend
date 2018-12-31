import { fetchJson, fetchJsonAuth } from './util/urlUtils';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const GET_ITEMS_URL = `${BACKEND_URL}/item/`;
const GET_ITEM_URL = `${BACKEND_URL}/item/`;

export function getItems(num) {
  const resolvedNum = !num ? 20 : num;
  return fetchJson(`${GET_ITEMS_URL}?num=${resolvedNum}`, {
    method: 'GET'
  });
}

export function getItem(id) {
  const resolvedUrl = `${GET_ITEM_URL}${id}`;
  console.log(resolvedUrl);
  return fetchJson(resolvedUrl, {
    method: 'GET'
  });
}
