import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { CourceInterface } from 'src/app/core-module/cource-list/interfaces/CourceInterface';
import { courceListStub } from 'src/assets/dev-stubs/cource-list';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { filter, debounceTime, switchMap } from 'rxjs/operators';
import { ConverterService, CourceApiInterface } from './converter.service';
import { settings } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CourceService {

    public filter: BehaviorSubject <string> = new BehaviorSubject('');
    private searchString: string = '';
    private courceList: CourceInterface[];
    private courceList$: Subject<any>;
    private courceCount: number = 5;

    constructor(
        private http: HttpClient,
        private converter: ConverterService
    ) { }

    filtering() {
        this.filter
        .pipe(
            debounceTime(settings.debounceTime ? settings.debounceTime : 500 )
        )
        .subscribe(res => {
            if ( res.length >= 3 ) {
                this.searchString = res;
                this.loadSortedData();
            } else {
                this.searchString = '';
                this.loadSortedData();
            }
        });
    }

    loadCourceData(): void {
        const url = settings.api + settings.cources;
        const header = new HttpHeaders();
        const param = new HttpParams()
        .set('start', '0')
        .set('count', String(this.courceCount));
        this.http.get( url, { headers: header, params: param } ).subscribe(
            res => {
                this.courceList = this.converter.courceListApi2App(res as CourceApiInterface[]);
                this.courceList$.next(
                    this.converter.courceListApi2App(res as CourceApiInterface[])
                );
            },
            error => {});
    }

    loadSortedData(): void {
        const url = settings.api + settings.cources;
        const header = new HttpHeaders();
        const param = new HttpParams()
        .set('textFragment', this.searchString)
        .set('start', '0')
        .set('count', String(this.courceCount));
        this.http.get(url, { headers: header, params: param }).subscribe(
            res => {
                this.courceList = this.converter.courceListApi2App(res as CourceApiInterface[]);
                this.courceList$.next(
                    this.converter.courceListApi2App(res as CourceApiInterface[])
                );
            },
            error => {});
    }

    loadCourceMore(): void {
        this.courceCount += 5;
        this.loadSortedData();
    }

    getCourceList() {
        this.courceList$ = new Subject();
        this.loadCourceData();
        this.filtering();

        return this.courceList$.asObservable().pipe(filter(data => data !== null));
    }

    getCource(id: number): CourceInterface {
       return (this.courceList.filter(item => item.id === Number(id)))[0];
    }

    /* back manipulations */

    createCource(item: CourceInterface) {
        const url = settings.api + settings.cources;
        const cource = this.converter.convertApp2Api(item);
        this.http.post( url, cource ).subscribe(
            res => {
                this.courceList$.next( this.loadSortedData());
            },
            error => {});
    }

    updateCource(item: CourceInterface) {
        const url = settings.api + settings.cources;
        const cource = this.converter.convertApp2Api(item);
        this.http.patch( url, cource ).subscribe(
            res => {
                this.courceList$.next( this.loadSortedData());
            },
            error => {});
    }

    getCourceById( id: number | string): any {
        const url = settings.api + settings.cources;
        const header = new HttpHeaders();
        const param = new HttpParams()
        .set('id ', String(id));
        this.http.get( url, { headers: header, params: param }).subscribe(
            res => {
                return this.converter.convertApi2App(res as CourceApiInterface);
            },
            error => {});
    }

    returnCource(item: CourceInterface) {
        if (!!item.id) {
            this.updateCource(item);
        } else {
            this.createCource(item);
        }
    }

    removeCource(id: string | number) {
        const url = settings.api + settings.cources;
        const header = new HttpHeaders();
        const param = new HttpParams()
        .set('id', String(id));
        this.http.delete( url, { headers: header, params: param } ).subscribe(
            res => {
                this.courceList$.next(this.loadSortedData());
            },
            error => {});
    }
}
