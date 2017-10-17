import {FETCH_BITCOIN} from '../actions/type';
export default function(state ={}, action){
  switch(action.type){
    case FETCH_BITCOIN:
    return action.payload;
    default:
    return state
  }
}
