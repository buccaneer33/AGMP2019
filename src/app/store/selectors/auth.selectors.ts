
import { createSelector } from '@ngrx/store';

import { AuthState } from '../reducers/auth.reducer';
import { AppState } from '../reducers/app.redusers';

const selectAuth = (state: AppState) => state.auth;
export const selectAuthToken = createSelector(
    selectAuth,
    (state: AuthState) => state.token
);
export const selectAuthUser = createSelector(
    selectAuth,
    (state: AuthState) => state.user
);
