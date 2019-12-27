
import { createSelector } from '@ngrx/store';

import { CourceState } from '../reducers/cources.reducres';
import { AppState } from '../reducers/app.redusers';

const selectCource = (state: AppState) => state.cource;
export const selectCourceList = createSelector(
    selectCource,
    (state: CourceState) => state.list
);
