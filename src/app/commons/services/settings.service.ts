import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

    private _settings$: BehaviorSubject<any>;
    private settings: {} = {};

    constructor( private http: HttpClient ) {
        this.getSettings$();
     }

     public getSettings$(): Observable<any> {
        if (!this._settings$) {
            this._settings$ = new BehaviorSubject(null);
            this.loadSettings();
        }
        return this._settings$.asObservable().pipe(filter(data => data !== null));
    }

    protected loadSettings(): void {
        this.http.get( environment.settings ).subscribe( data => {
            this._settings$.next( data );
            this.settings = data;
        });
    }
    public get(prop) {
        return this.settings.hasOwnProperty(prop) ? this.settings[prop] : null;
    }
}
