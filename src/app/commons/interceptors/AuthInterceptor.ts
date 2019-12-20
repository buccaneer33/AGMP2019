import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AutorisationService } from 'src/app/commons/services/autorisation.service';
import { async } from '@angular/core/testing';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AutorisationService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newHeaders = {};

        if (req.body
            && (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH')
            && !req.headers.get('Content-Type')) {
            newHeaders['Content-Type'] = 'application/json';
        }

        if (this.auth.isAutificated()
            && !req.headers.get('Authorization')) {
            newHeaders['Authorization'] = this.auth.getToken();
        }

        if (Object.keys(newHeaders).length) {
            req = req.clone({
            setHeaders: newHeaders
        });

        return next.handle(req);
    }}
}
