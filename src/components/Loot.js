import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchBitcoin} from '../actions';

export class LOOT extends Component {
    componentDidMount() {
      this.props.fetchBitcoin()
    }
    computeBitcoin(){
      if(Object.keys(this.props.bitcoin).length === 0){
        return 'Loading'
      }
      else{
        let USDRate = Object.values(this.props.bitcoin.bpi)[0].rate;
        let answer =  this.props.balance / parseInt(USDRate.replace(',',''), 10);
        return answer.toFixed(3)
      }
    }
    render() {
        return (
            <div className="LOOT">
                <h3 className='bitcoin-text'>Bitcoin balance: {this.computeBitcoin()}</h3>
            </div>
        );
    }
}

function mapStateToProps({bitcoin,balance}) {
  return{bitcoin,balance}
}


export default connect(mapStateToProps,{fetchBitcoin})(LOOT)
