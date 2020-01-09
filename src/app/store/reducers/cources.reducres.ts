import { Cource } from '../../core-module/cource-list/models/cource';
import { CourceActions, ECourceActions } from '../actions/cources.actions';

export interface CourceState {
    list: Cource[];
}

export const initialCourceState: CourceState = {
    list: null,
};

export const courceReducers = (state = initialCourceState, action: CourceActions): CourceState => {
    switch (action.type) {
        case ECourceActions.GetList:
            return {...state};
        case ECourceActions.SetList:
            return {
                ...state,
                list: action.list
            };
        default:
            return state;
    }
};
