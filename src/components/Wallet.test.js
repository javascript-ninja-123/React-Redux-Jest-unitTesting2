import React from 'react';
import {shallow} from 'enzyme';
import setupTest from '../setupTest';
import {WALLET} from './Wallet';

describe('Wallet', () => {
    const mockDeposit = jest.fn();
    const mockWithdraw = jest.fn();
    const mockReset = jest.fn();
    const props = {balance: 20,depositBalance:mockDeposit,withDrawBalance:mockWithdraw,resetBalance:mockReset};
    const wallet = shallow(<WALLET {...props}/>)

    describe('HTML (static)', () => {
      it('renders it correctly', () => {
        expect(wallet).toMatchSnapshot();
      })
      it('renders a input to deposit or withdraw from the balance', () => {
        expect(wallet.find('.balance-input').exists()).toBe(true)
      })
      it('contains a state balance from the begining', () => {
        expect(wallet.state().balance).toEqual('')
      })
      it('does not render a withdrawl button when balance is 0', () => {
        const props = {depositBalance:mockDeposit,withDrawBalance:mockWithdraw};
        const wallet = shallow(<WALLET {...props}/>)
        expect(wallet.find('.withdraw-btn').exists()).toBe(false)
      })
      it('render a withdrawal button when balance is bigger than 0', () => {
        const props = {balance:30,depositBalance:mockDeposit,withDrawBalance:mockWithdraw};
        const wallet = shallow(<WALLET {...props}/>)
        expect(wallet.find('.withdraw-btn').exists()).toBe(true)
      })
      it('renders a reset button', () => {
        expect(wallet.find('.reset-btn').exists()).toBe(true);
      })
    })
    describe('Javascript (behavior)',() => {
      const dollar = 100;
      beforeEach(() => {
        wallet.find('.balance-input').simulate('change',{target:{value:dollar}})
      })
      it('change the balance input', () => {
        expect(wallet.state().balance).toEqual(parseInt(dollar,10))
      })
      it('shows the right money',() => {
        expect(wallet.find('.balance').text()).toEqual('Wallet ballance 20')
      })
      describe('user wants to make deposit', () => {
        beforeEach(() => {
          wallet.find('.deposit-btn').simulate('click');
        })
        afterEach(() => {
          wallet.setState({balance:''})
        })
        it('dispatches the deposit() it ecives from props with local banace', () => {
            expect(mockDeposit).toHaveBeenCalledWith(parseInt(dollar,10))
        })
      })
      describe('user wants to withdraw some moneny', () => {
        beforeEach(() => {
          wallet.find('.withdraw-btn').simulate('click')
        })
        afterEach(() => {
          wallet.setState({balance:''})
        })
        it('dispatch the withDrawBalance and it receives from props with local balance', () => {
          expect(mockWithdraw).toHaveBeenCalledWith(parseInt(dollar,10))
        })
      })
      describe('user wants to donate all money', () => {
        beforeEach(() => {
          wallet.find('.reset-btn').simulate('click')
        })
        it('reset everything', () => {
          expect(mockReset).toHaveBeenCalledWith(0)
        })
      })
      describe('disable the deposit button if nothing is typed', () => {
        beforeEach(() => {
          wallet.setState({balance:''})
        })
        it('deposit button is disabled', () => {
          expect(wallet.find('.deposit-btn').prop('disabled')).toEqual(true);
        })
      })
      describe('enable the deposit button if nothing is typed', () => {
        beforeEach(() => {
          wallet.setState({balance:20})
        })
        it('deposit button is enabled', () => {
          expect(wallet.find('.deposit-btn').prop('disabled')).toEqual(false);
        })
      })
    })

})
