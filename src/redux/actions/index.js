import { DEBIT, CREDIT } from '../constants/action-types';


export function debit(payload) {
    return { type: DEBIT, payload }
};

export function credit(payload) {
    return { type: CREDIT, payload }
};