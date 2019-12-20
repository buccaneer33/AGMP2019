import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from './settings.service';
import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private courceUrl: string;
    private userUrl: string;
    private authorsUrl: string;

    private courseForm: Subject<any>;
    private authorsForm: Subject<any>;
    private usersForm: Subject<any>;

    constructor(
        private http: HttpClient,
        private settings: SettingsService
    ) { }

    loadCourceData(): void {
        this.settings.getSettings$().subscribe(settings => {
            const url = settings.api + settings.cources;
            this.http.get(url).subscribe( (data) => {
                if (data) {
                    this.courseForm.next(data);
                }
            });
        });
    }
    getCourceData() {
        if (!this.courseForm) {
            this.courseForm = new Subject();
            this.loadCourceData();
        }
        return this.courseForm.asObservable().pipe(filter(data => data !== null));
    }
    sendCourceData(courceData) {
        return this.http.post(this.courceUrl, courceData);
    }
}
