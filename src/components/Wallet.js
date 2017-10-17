import React,{Component} from 'react';
import {connect} from 'react-redux';
import {depositBalance,withDrawBalance,resetBalance} from '../actions';
import { Input,Button } from 'semantic-ui-react'

export class WALLET extends Component {
    constructor(props){
    	super(props);
    	this.state = {balance:''};
      this.renderWithDrawlButton = this.renderWithDrawlButton.bind(this);
      this.disabledButton = this.disabledButton.bind(this)
    }
    onChange(e){
      typeof e.target.value === 'number' ?
      this.setState({balance:parseInt(e.target.value,10)})
      :
      this.setState({balance:e.target.value})
    }
    onClickDeposit(){
      this.props.depositBalance(parseInt(this.state.balance,10))
      this.setState({balance:''})
    }
    onClickWithdrawal(){
      this.props.withDrawBalance(parseInt(this.state.balance,10))
        this.setState({balance:''})
    }
    onClickReset(){
      this.props.resetBalance(0)
    }
    renderWithDrawlButton(){
    return  this.props.balance > 0
      ?
      <div>
      <Button
        className='withdraw-btn'
        onClick={this.onClickWithdrawal.bind(this)}
        >
          Withdrawl
        </Button>
        <Button
         className='reset-btn'
         onClick={this.onClickReset.bind(this)}
         >
         Reset
         </Button>
         </div>
      : ''
    }
    disabledButton(){
        return this.state.balance === ''
        ?
        <Button
        className='deposit-btn'
        onClick={this.onClickDeposit.bind(this)}
        disabled={true}
        >
          Deposit
        </Button>
        :
        <Button
        className='deposit-btn'
        disabled={false}
        onClick={this.onClickDeposit.bind(this)}
        >
          Deposit
        </Button>
    }
    render() {
        return (
            <div className="WALLET">
              <h3 className='balance'>Wallet ballance {this.props.balance}</h3>
               <Input placeholder='$ dollars'
               className='balance-input'
               value={this.state.balance}
               type='text'
               onChange={this.onChange.bind(this)}
               />
               {this.disabledButton()}
              {this.renderWithDrawlButton()}
            </div>
        );
    }
}

function mapStateToProps({balance}) {
  return{balance}
}

export default connect(mapStateToProps,{depositBalance,withDrawBalance,resetBalance})(WALLET)
