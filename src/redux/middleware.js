import {CREDIT} from './constants/action-types';

export function checkBalanceBeforeTransactionMiddleware({getState, dispatch}) {
    return function(next) {
        return function(action) {
            const {bankBalance, creditToday} = getState();
            if(action.type === CREDIT) {
                if(creditToday >= 20000)
                {
                    return dispatch({type: "DAILY_CREDIT_LIMIT_REACHED"})
                }
                else if(bankBalance - action.payload.amount <= 0)
                {
                    return dispatch({type: "INSUFFICIENT_BALANCE"})
                }
            }

            return next(action);
        }
    }
}