import { ActionReducerMap } from '@ngrx/store';
import { authReducers, AuthState, initialAuthState } from './auth.reducer';
import { courceReducers, CourceState, initialCourceState } from './cources.reducres';

export interface AppState {
    readonly auth: AuthState;
    readonly cource: CourceState;
}
export const initialAppState: AppState = {
    auth: initialAuthState,
    cource: initialCourceState
};

export const appReducers: ActionReducerMap<AppState, any> = {
    auth: authReducers,
    cource: courceReducers
};
