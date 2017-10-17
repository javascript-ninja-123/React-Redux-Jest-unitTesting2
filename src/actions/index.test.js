import {SET_BALANCE,SET_BALANCE_TWO,DEPOSIT_BALANCE,WITHDRAW_BALANCE,RESET_BALANCE,
  FETCH_BITCOIN
} from './type';
import {setBalance,setBalanceTwo,depositBalance,withDrawBalance,resetBalance,
  fetchBitcoin
} from './index';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({bitcoin: {}});
const mockResponse = {body:{bpi:'bitcoin price index'}};

fetchMock.get(
  'https://api.coindesk.com/v1/bpi/currentprice.json',mockResponse
)


describe('Action', () => {
  it('creates an action to set the balance', () => {
    const balance = 0;
    const expectedAction = {type:SET_BALANCE, payload:balance};
    expect(setBalance(balance)).toEqual(expectedAction)
  })
  it('creates an action to set the balance two', () => {
    const balance = 0;
    const expectedAction = {type:SET_BALANCE_TWO, payload:balance};
    expect(setBalanceTwo(balance)).toEqual(expectedAction)
  })
  it('creates an action to deposit into the balance', () => {
    const deposit = 10;
    const expectedAction = {type:DEPOSIT_BALANCE, payload:deposit}
    expect(depositBalance(deposit)).toEqual(expectedAction);
  })
  it('creates an action to withdraw from the balance', () => {
    const withdraw = 20;
    const expectedAction = {type:WITHDRAW_BALANCE, payload:withdraw};
    expect(withDrawBalance(withdraw)).toEqual(expectedAction)
  })
  it('creates an action to reset the balance', () => {
    const payload= 0;
    const expectedAction = {type:RESET_BALANCE, payload: payload};
    expect(resetBalance(payload)).toEqual(expectedAction)
  })

  describe('bitcoin API', () => {
      it('creates an async action to fetch the bitcoin value', () => {
        const expectedAction = [{payload:mockResponse.body, type:FETCH_BITCOIN}]
        return store.dispatch(fetchBitcoin())
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction)
        })
      })
  })
})
