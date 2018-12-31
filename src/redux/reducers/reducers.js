import { combineReducers } from 'redux';

/* Start  Add your reducers here */
import userReducer from './userReducer';
import cartReducer from './cartReducer';
/* End    Add your reducers here */

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
