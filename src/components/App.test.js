import React from 'react';
import {shallow} from 'enzyme';
import setupTest from '../setupTest';
import App from './App';
import {WALLET} from './Wallet';
import {LOOT} from './Loot'

describe('App', () => {
    const app = shallow(<App/>);
    const wallet = shallow(<WALLET />)
    const loot = shallow(<LOOT />)
  //Html description
    describe('HTML (static)', () => {
      it('renders correctly', () => {
        expect(app).toMatchSnapshot();
      })
      it('contains a connected Wallet component', () => {
        expect(wallet.exists()).toBe(true);
      })
      it('contains a connected Loot component', () => {
        expect(loot.exists()).toBe(true)
      })
    })
  //ends here
})
