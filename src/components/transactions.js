import React from 'react';
import { connect } from 'react-redux';
import { debit, credit } from '../redux/actions/index';

const mapStateToProps = state => {
    return {
        currentBalance: state.bankBalance
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        debit: payload => dispatch(debit(payload)),
        credit: payload => dispatch(credit(payload)),
    };
}

class HandleTransactions extends React.Component {

    onDebitAmount = () => {
        this.props.debit({amount: 10000});
    }
    onCreditAmount = () => {
        this.props.credit({amount: 10000});
    }

    render () 
    {
        return (
            <div style={{ display: 'block', margin: '0 auto', textAlign: 'center' }}>
                <div>
                    <h1>Current balance: {this.props.currentBalance}</h1>
                </div>
                <button onClick={this.onDebitAmount}>Debit</button>
                <br />
                <button onClick={this.onCreditAmount}>Credit</button>
            </div>
        );
    }
}

const Transactions = connect(mapStateToProps, mapDispatchToProps)(HandleTransactions);

export default Transactions;