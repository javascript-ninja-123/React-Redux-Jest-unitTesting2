import RootReducer from './index';
import balanceReducer from './reducer_balance';
import balanceReducerTwo from './reducer_balanceTwo';
import bitcoinReduecer from './reducer_bitcoin';
import {SET_BALANCE,DEPOSIT_BALANCE,WITHDRAW_BALANCE,RESET_BALANCE,
  FETCH_BITCOIN
} from '../actions/type';
describe('reducer',() => {
  describe('root reducer', () => {
    it('initializing the default state', () => {
      expect(RootReducer({},{})).toEqual({balance:0, bitcoin:{},balanceTwo:0})
    })
  })
  it('set a balance', () => {
    const payload = 10;
    expect(balanceReducerTwo(undefined,{type:SET_BALANCE,payload}))
    .toEqual(payload)
  })

  it('deposit into the balance', () => {
    const payload = 10;
    const state = 5;
    expect(balanceReducerTwo(state,{type:DEPOSIT_BALANCE,payload}))
    .toEqual(payload + state)
  })
  it('withdraw from the balance', () => {
    const payload = 10;
    const state = 20;
    expect(balanceReducerTwo(state,{type:WITHDRAW_BALANCE,payload}))
    .toEqual(state - payload)
  })
  it('reset the balance', () => {
    const payload = 0;
    expect(balanceReducerTwo(undefined,{type:RESET_BALANCE,payload}))
    .toEqual(0)
  })

  describe('bitcoinReducer', () => {
    const payload = {bpi:'bitcoin price index'}
    it('fetches and sets the bitcoin data', () => {
      expect(bitcoinReduecer({},{type:FETCH_BITCOIN,payload }))
      .toEqual(payload)
    })
  })
})
