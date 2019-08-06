import { DEBIT, CREDIT } from '../constants/action-types';

const initialState = {
    bankBalance: 50000,
    creditToday: 0
};

function rootReducer(state = initialState, action) {
    if (action.type === DEBIT) {
        return Object.assign({}, state, {
            bankBalance: state.bankBalance + action.payload.amount,
        })
    }
    else if (action.type === CREDIT) {
        return Object.assign({}, state, {
            bankBalance: state.bankBalance - action.payload.amount,
            creditToday: state.creditToday + action.payload.amount
        })
    }
    else if(action.type === "INSUFFICIENT_BALANCE")
    {
        window.alert("You have insufficient funds to credit...");
    }
    else if(action.type === "DAILY_CREDIT_LIMIT_REACHED")
    {
        window.alert("You have reached your credit limit for today...");
    }
    return state;
};
export default rootReducer;