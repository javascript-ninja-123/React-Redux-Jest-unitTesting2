import {SET_BALANCE,SET_BALANCE_TWO,DEPOSIT_BALANCE,WITHDRAW_BALANCE,RESET_BALANCE,
FETCH_BITCOIN
} from './type';

export function setBalance(balance){
  return{
    type:SET_BALANCE,
    payload:balance
  }
}

export function setBalanceTwo(balance){
  return{
    type:SET_BALANCE_TWO,
    payload:balance
  }
}

export function depositBalance(deposit){
  return{
    type:DEPOSIT_BALANCE,
    payload:deposit
  }
}

export function withDrawBalance(withdraw){
  return{
    type:WITHDRAW_BALANCE,
    payload:withdraw
  }
}

export function resetBalance(reset){
  return{
    type:RESET_BALANCE,
    payload:reset
  }
}

/////fetch api
const fetchBitCoinAPI = async () => {
  let response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  return await response.json()
}

export function fetchBitcoin(){
  return dispatch => {
  return fetchBitCoinAPI()
    .then(data => {
      dispatch({
        type:FETCH_BITCOIN,
        payload:data
      })
    })
  }
}
