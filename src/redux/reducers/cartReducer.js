import createReducer from './util/baseReducer';
import {
  CART_ADD,
  CART_REMOVE,
  CART_SET_ITEM_QUANTITY,
  CART_SET_FIELD
} from '../constants/cartConstants';
import { retrieveStorage, saveStorage } from './util/localStorageUtils';

// hydrate state and parse if possible
const cartStr = retrieveStorage('cart');

const dummyState = {
  items: [
    // {
    //   id: '13242',
    //   name: 'flower config A',
    //   quantity: 9,
    //   imgSrc: 'https://m.media-amazon.com/images/I/51z7gY5iSOL._AA256_.jpg'
    // },
    // {
    //   id: '1231221',
    //   name: 'flower config B',
    //   quantity: 5,
    //   imgSrc: 'https://m.media-amazon.com/images/I/51z7gY5iSOL._AA256_.jpg'
    // }
  ],
  personalMessage: 'Personal message field',
  specialRequest: 'Special request field'
};

// of the shape:
// initialState = {
//   items: {},
//   personalMessage: '',
//   specialRequest: '',
// }
// const initialState = cartStr || dummyState;
const initialState = dummyState;

function cartSetItemQty(state, action) {
  const stateNew = action.payload;
  const { id, quantity } = stateNew;
  const items = [];
  const oldItems = [...state.items];

  for (let i = 0; i < oldItems.length; i++) {
    const item = oldItems[i];
    if (item.id === id) {
      item.quantity = quantity;
    }
    items.push(item); // push otherwise
  }

  const newState = { ...state, items };
  saveStorage('cart', newState);
  return newState;
}

function cartAdd(state, action) {
  const stateNew = action.payload;
  const { id, name, quantity, imgSrc, price } = stateNew;
  const newItem = {
    id,
    name,
    quantity,
    imgSrc,
    price
  };
  const newState = {
    ...state,
    items: [...state.items]
  };

  // if not new id, then increment
  let isFound = false;
  for (let i = 0; i < newState.items.length; i++) {
    const currItem = newState.items[i];
    if (id === currItem.id) {
      currItem.quantity += quantity;
      isFound = true;
      break;
    }
  }

  // if new id, then add item directly
  if (!isFound) {
    newState.items = [...newState.items, newItem];
  }
  saveStorage('cart', newState);
  return newState;
}

function cartRemove(state, action) {
  const { payload } = action;
  const { id } = payload;
  const items = [];
  for (let i = 0; i < state.items.length; i++) {
    const item = state.items[i];
    if (item.id !== id) {
      items.push(item);
    }
  }
  const newState = { ...state, items };
  saveStorage('cart', newState);
  return newState;
}

function cartSetField(state, action) {
  const { field, value } = action.payload;
  const newState = { ...state, [field]: value };
  saveStorage('cart', newState);
  return newState;
}

export default createReducer(initialState, {
  [CART_ADD]: cartAdd,
  [CART_REMOVE]: cartRemove,
  [CART_SET_ITEM_QUANTITY]: cartSetItemQty,
  [CART_SET_FIELD]: cartSetField
});
