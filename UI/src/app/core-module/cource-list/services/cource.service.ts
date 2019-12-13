import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { CourceInterface } from 'src/app/core-module/cource-list/interfaces/CourceInterface';
import { courceListStub } from 'src/assets/dev-stubs/cource-list';
import { ApiService } from 'src/app/commons/services/api.service';
import { Subject, Observable } from 'rxjs';
import { SettingsService } from '../../../commons/services/settings.service';
import { filter } from 'rxjs/operators';
import { ConverterService } from './converter.service';

@Injectable({
    providedIn: 'root'
})
export class CourceService {

    private courceList: Subject<any>;

    constructor(
        public api: ApiService,
        private http: HttpClient,
        private settings: SettingsService,
        private converter: ConverterService
    ) { }

    loadCourceData(): void {
        const url = this.settings.get('api') + this.settings.get('cources');
        const header = new HttpHeaders();
        const param = new HttpParams()
        .set('start', '0')
        .set('count', '5');
        this.http.get( url, { headers: header, params: param } ).subscribe(
            res => {
                this.courceList.next(this.converter.courceListApi2App(res as any));
            },
            error => {});
    }
    loadSortedData(search: string): void {
        const url = this.settings.get('api') + this.settings.get('cources');
        const header = new HttpHeaders();
        const param = new HttpParams()
        .set('filter', search);
        this.http.get(url, { headers: header, params: param }).subscribe(
            res => {
                this.courceList.next(this.converter.courceListApi2App(res as any));
            },
            error => {});
    }

    getCourceList(search?: string): any {
        if (search) {
            this.courceList = new Subject();
            this.loadSortedData(search);
        } else {
            this.courceList = new Subject();
            this.loadCourceData();
        }
        return this.courceList.asObservable().pipe(filter(data => data !== null));
    }

    createCource(item: CourceInterface) {
        const url = this.settings.get('api') + this.settings.get('cources');
        const cource = this.converter.convertApp2Api(item);
        this.http.post( url, cource ).subscribe(
            res => {
                this.courceList.next( this.getCourceList());
            },
            error => {});
    }

    getCourceById( id: number | string): any {
        const url = this.settings.get('api') + this.settings.get('cources');
        const header = new HttpHeaders();
        const param = new HttpParams()
        .set('$id ', String(id));
        this.http.get( url, { headers: header, params: param }).subscribe(
            res => {
                return this.converter.convertApi2App(res as any);
            },
            error => {});
    }

    updateCource(item: CourceInterface) {
        /*const index = this.courceList.findIndex(obj => obj.id === item.id);
        this.courceList = this.courceList.slice(0);
        this.courceList.splice(index, 1, item);*/
    }

    removeCource(id: string | number) {
        const url = this.settings.get('api') + this.settings.get('cources');
        const header = new HttpHeaders();
        const param = new HttpParams()
        .set('id', String(id));
        this.http.delete( url, { headers: header, params: param } ).subscribe(
            res => {
                this.courceList.next(this.getCourceList());
            },
            error => {});
    }
    getMaxId(): number {
        // const res = this.courceList.slice(0);
        const max: number = 0;
        /*res.forEach( item  => {
            if (!max) {
                max = Number(item.id);
            } else {
                max = max < Number(item.id) ? Number(item.id) : max;
            }
        });*/
        return max;
    }
    getNewId(): number {
        let max = this.getMaxId();
        return ++max;
    }
}
