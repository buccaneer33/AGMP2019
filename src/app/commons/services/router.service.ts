import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RouterService {
    constructor(private router: Router) {}

    public getQueryParams(qs) {
        qs = qs.split('+').join(' ');

        const params = {};
        let tokens;
        const re = /[?&]?([^=]+)=([^&]*)/g;

        do {
            tokens = re.exec(qs);
            if (tokens) {
                params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
            }
        } while (tokens);

        return params;
    }
}
