import {
  CART_ADD,
  CART_REMOVE,
  CART_SET_ITEM_QUANTITY,
  CART_SET_FIELD
} from '../constants/cartConstants';

export function cartAdd(item) {
  const { id, quantity, name, landscapeImg } = item;
  // TODO replace placeholders
  const imgSrc = landscapeImg;
  return {
    type: CART_ADD,
    payload: { id, name, quantity, imgSrc }
  };
}

export function cartRemove({ id }) {
  // TODO put in REST
  return {
    type: CART_REMOVE,
    payload: { id }
  };
}

export function cartSetField({ field, value }) {
  // TODO put in REST
  return {
    type: CART_SET_FIELD,
    payload: { field, value }
  };
}

export function cartSetItemQty({ id, quantity }) {
  // TODO put in REST
  return {
    type: CART_SET_ITEM_QUANTITY,
    payload: { id, quantity }
  };
}
