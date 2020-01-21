import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cource } from '../models/cource';
import { Author } from '../models/author';
import { map, switchMap, tap } from 'rxjs/operators';
import { State, Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers/app.redusers';
import { GetCourceList, SetCourceList } from '../../../store/actions/cources.actions';
import { cloneDeep } from 'lodash';

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

    getAuthors(): Observable<Author[]> {
        return this.http
            .get<Author[]>(environment.api + 'authors')
            .pipe(
                map(array => {
                    const clone = array.slice(0);
                    const newArr: Author[] = [];
                    clone.forEach(item => {
                        const name = item.name.split(' ');
                        newArr.push({
                            id: item.id,
                            name: name[0],
                            lastName: name[1]
                        });
                    });
                    return newArr;
                })
            );
    }
}
