import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { CourceInterface } from 'src/app/core-module/cource-list/interfaces/CourceInterface';
import { courceListStub } from 'src/assets/dev-stubs/cource-list';
import { ApiService } from 'src/app/commons/services/api.service';
import { Subject, Observable } from 'rxjs';
import { SettingsService } from '../../../commons/services/settings.service';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CourceService {

    private courceList: Subject<any>;

    constructor(
        public api: ApiService,
        private http: HttpClient,
        private settings: SettingsService
    ) { }

    loadCourceData(): void {
        this.settings.getSettings$().subscribe(settings => {
            const url = settings.api + settings.cources;
            const header = new HttpHeaders();
            const param = new HttpParams()
            .set('start', '0')
            .set('count', '5');
            this.http.get( url, { headers: header, params: param } ).subscribe(
                res => {
                    this.courceList.next(this.convertCourceData(res));
                },
                error => {});
        });
    }
    loadSortedData(search: string): void {
        this.settings.getSettings$().subscribe(settings => {
            const url = settings.api + settings.cources;
            const header = new HttpHeaders();
            const param = new HttpParams()
            .set('filter', search);
            this.http.get(url, { headers: header, params: param }).subscribe(
                res => {
                    this.courceList.next(this.convertCourceData(res));
                },
                error => {});
        });
    }

    getCourceList(search?: string): any {
        if (search) {
            this.courceList = new Subject();
            this.loadSortedData(search);
            return this.courceList.asObservable().pipe(filter(data => data !== null));
        } else {
            this.courceList = new Subject();
            this.loadCourceData();
            return this.courceList.asObservable().pipe(filter(data => data !== null));
        }
    }

    convertCourceData(list): CourceInterface[] {
        const cources: CourceInterface[] = [];
        list.forEach(item => {
            const cource: CourceInterface = {
                id: item.id,
                title: item.name,
                crationDate: item.date,
                duration: item.length,
                topRated: item.isTopRated,
                description: item.description,
                author: item.authors[0].name
            };
            cources.push(cource);
        });
        return cources;
    }

    createCource(item: CourceInterface) {
        this.settings.getSettings$().subscribe(settings => {
            const url = settings.api + settings.cources;
            const id = {
                id: Number(item.id),
                name: item.title,
                date: item.crationDate,
                length: Number(item.duration),
                authors: {
                    id: 0,
                    name: item.author
                },
                isTopRated: item.topRated
            };
            this.http.post( url, id ).subscribe(
                res => {
                    this.courceList.next( this.getCourceList());
                },
                error => {});
        });
    }

    getCourceById( id: number | string): any {
        this.settings.getSettings$().subscribe(settings => {
            const url = settings.api + settings.cources;
            const header = new HttpHeaders();
            const param = new HttpParams()
            .set('$id ', String(id));
            this.http.get( url, { headers: header, params: param }).subscribe(
                res => {
                    const cource: CourceInterface = {
                        id: (res as any).id,
                        title: (res as any).name,
                        crationDate: (res as any).date,
                        duration: (res as any).length,
                        topRated: (res as any).isTopRated,
                        description: (res as any).description,
                        author: (res as any).authors[0].name
                    };
                    return cource;
                },
                error => {});
        });
    }

    updateCource(item: CourceInterface) {
        /*const index = this.courceList.findIndex(obj => obj.id === item.id);
        this.courceList = this.courceList.slice(0);
        this.courceList.splice(index, 1, item);*/
    }

    removeCource(id: string | number) {
        this.settings.getSettings$().subscribe(settings => {
            const url = settings.api + settings.cources;
            const header = new HttpHeaders();
            const param = new HttpParams()
            .set('$id ', String(id));
            this.http.delete( url, { headers: header, params: param } ).subscribe(
                res => {
                    this.courceList.next( this.getCourceList());
                },
                error => {});
        });
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
