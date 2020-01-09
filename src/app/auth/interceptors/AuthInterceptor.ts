import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';
import { State } from '@ngrx/store';
import { AppState } from '../../store/reducers/app.redusers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private state: State<AppState>
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newHeaders = {};
        const token = this.state.getValue().auth.token;

        if (req.body
            && (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH')
            && !req.headers.get('Content-Type')) {
            newHeaders['Content-Type'] = 'application/json';
        }

        if (token && !req.headers.get('Authorization')) {
            newHeaders['Authorization'] = token;
        }

        if (Object.keys(newHeaders).length) {
            req = req.clone({
                setHeaders: newHeaders
            });
            return next.handle(req);
        }
    }
}
