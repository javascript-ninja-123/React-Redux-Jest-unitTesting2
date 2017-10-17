import { combineReducers } from 'redux';
import balanceReducer from './reducer_balance';
import balanceReducerTwo from './reducer_balanceTwo';
import bitcoinReduecer from './reducer_bitcoin';
const rootReducer = combineReducers({
  balance:balanceReducer,
  bitcoin:bitcoinReduecer,
  balanceTwo:balanceReducerTwo
});

export default rootReducer;
