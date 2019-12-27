import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cource } from '../models/cource';
import { map, switchMap, tap } from 'rxjs/operators';
import { State, Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers/app.redusers';
import { GetCourceList, SetCourceList } from '../../../store/actions/cources.actions';

@Injectable({
    providedIn: 'root'
})
export class CourceService {

    constructor(
        private http: HttpClient,
        private store: Store<AppState>,
        private state: State<AppState>,
    ) { }

    list(params: {[prop: string]: string} = {}): Observable<Cource[]> {
        return this.http
            .get<Cource[]>(environment.api + 'courses', {params});
    }

    load(id: number): Observable<Cource> {
        return this.http
            .get<Cource>(environment.api + 'courses/' + id);
    }

    update(model: Cource): Observable<Cource> {
        return this.http
            .patch<Cource>(environment.api + 'courses/' + model.id, model);
    }

    add(model: Cource): Observable<Cource> {
        return this.http
            .post<Cource>(environment.api + 'courses', model);
    }

    del(id: number): Observable<void> {
        return this.http
            .delete<void>(environment.api + 'courses/' + id);
    }
}
