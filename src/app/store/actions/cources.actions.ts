import { Action } from '@ngrx/store';
import { Cource } from '../../core-module/cource-list/models/cource';

export enum ECourceActions {
    GetList = '[Cource] Get List',
    SetList = '[Cource] Set List',
}

export class GetCourceList implements Action {
    public readonly type = ECourceActions.GetList;
}
export class SetCourceList implements Action {
    public readonly type = ECourceActions.SetList;
    constructor(public list: Cource[]) {}
}

export type CourceActions = GetCourceList | SetCourceList ;
