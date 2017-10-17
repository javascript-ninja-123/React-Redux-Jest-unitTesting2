import {SET_BALANCE,DEPOSIT_BALANCE,WITHDRAW_BALANCE,RESET_BALANCE
} from '../actions/type';

export default function(state = 0, action){
  switch(action.type){
    case SET_BALANCE:
    return action.payload;
    case DEPOSIT_BALANCE:
    return action.payload + state;
    case WITHDRAW_BALANCE:
    return state - action.payload;
    case RESET_BALANCE:
    return action.payload;
    default:
    return state
  }
}
