import React from 'react';
import {shallow,mount} from 'enzyme';
import setupTest from '../setupTest';
import {LOOT} from './Loot';

describe('Loot', () => {
  const mockFetchBitcoin = jest.fn()
  const props = {balance:10, bitcoin:{}}
  let loot = shallow(<LOOT {...props}/>)
  describe('HTML (static)', () => {
    it('renders correctly', () => {
      expect(loot).toMatchSnapshot()
    })
  })
  describe('when mounted', () => {
    beforeEach(() => {
      const props = {balance:10, bitcoin:{},fetchBitcoin:mockFetchBitcoin}
      let loot = mount(<LOOT {...props} />)
    })
    it('dipatches the fetchBitcoin() methods', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    })
  })
  describe('when there are valid bitcoin props', () => {
    beforeEach(() => {
        const props = {balance:10, bitcoin:{bpi:{USD:{rate:1000}}}}
        let loot = shallow(<LOOT {...props}/>)
    })
    it('displays the correct bitcoin value', () => {
      expect(loot.find('.bitcoin-text').text()).toEqual('Bitcoin balance: 0.01')
    })
  })
})
