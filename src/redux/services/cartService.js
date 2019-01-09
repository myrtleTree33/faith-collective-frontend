import { fetchJson, fetchJsonAuth } from './util/urlUtils';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const POST_PAYMENT_CHARGE = `${BACKEND_URL}/payment/charge`;

export function pay({ transactionId, stripeToken, order }) {
  return fetchJson(`${POST_PAYMENT_CHARGE}`, {
    method: 'POST',
    body: JSON.stringify({
      transactionId,
      stripeToken,
      order
    })
  });
}
