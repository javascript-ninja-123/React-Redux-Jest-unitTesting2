import {SET_BALANCE,DEPOSIT_BALANCE,WITHDRAW_BALANCE,RESET_BALANCE
} from '../actions/type';
import {read_cookie, bake_cookie} from 'sfcookies';

const BALANCE_COOKIE = 'BALANCE_COOKIE';


const balance = (state = 0,action) => {
  let balance;

  switch(action.type){
    case SET_BALANCE:
    balance = action.payload;
    break;
    case DEPOSIT_BALANCE:
    balance =  state + action.payload;
    break;
    case WITHDRAW_BALANCE:
    balance =  state - action.payload;
    break;
    case RESET_BALANCE:
    balance = action.payload;
    break;
    default:
    balance =  parseInt(read_cookie(BALANCE_COOKIE),10) || state;
  }
  bake_cookie(BALANCE_COOKIE,balance);
  return balance;
}


export default balance;
